import { Request, Response, NextFunction } from 'express'
import { Controller, Get, Post, Middleware } from '../decorators'
import axios from 'axios';
import { InternalServerErrorException, CommonException } from '../exceptions';
import { LogInDTO, MemoriaGetDTO } from '../dto/memoria.dto';
import * as jwt from 'jsonwebtoken';
import { authenticateMiddleware, validationMiddleware } from '../middleware';

const querystring = require('querystring');
var md5 = require('md5');


@Controller('/memoria')
export class MemoriaController {
    @Get('/getMethod')
    // @Middleware(authenticateMiddleware)
    public async index(request: Request, response: Response, next: NextFunction) {
        this.axiosRequest('GET', request, response, next);
    }
    @Post('/postMethod')
    public async postMethod(request: Request, response: Response, next: NextFunction) {
        this.axiosRequest('POST', request, response, next);
    }
    @Post('/putMethod')
    public async putMethod(request: Request, response: Response, next: NextFunction) {
        this.axiosRequest('PUT', request, response, next);
    }

    @Post('/login')
    @Middleware(validationMiddleware(LogInDTO))
    public async login(request: Request, response: Response, next: NextFunction) {
        const { loginame, password }: LogInDTO = request.body;

        // let filterData={
        //     "filters": [
        //         {
        //             "column": "lastname",
        //             "filterValue": "%test%",
        //             "filterOperator": "LIKE"

        //         },
        //         {
        //             "column": "groupID",
        //             "filterValue": 23,
        //             "filterOperator":"EQUAL"           

        //         }
        //     ],
        //     "filterLogic": "AND"
        // }
        let fData = {
            "filters": [],
            "column": "loginname",
            "filterValue": loginame,
            "filterOperator": "EQUAL"
        };
        axios({
            //method: 'GET',
            //url: 'http://185.230.21.218:5000/api/Users/getUsersAll',
            method: 'POST',
            url: 'http://146.4.123.42:5000/api/Users/getUsersByFilter',
            data: fData,
            validateStatus: function (status) {
                return status < 600;
            },
            headers: { "Access-Control-Allow-Origin": "*", "Authorization": process.env.MEMORIA_API_TOKEN.toString() },

        })
            .then(async function (res) {
                //console.log('res', res, res.data)
                if (res.data == '') {
                    next(new CommonException('404', 'No Record Found'));
                }
                else {
                    let loggedUser = { password: '' };
                    if (Array.isArray(res.data.objects)) {
                        res.data.objects.map(function (user, index) {
                            if (user.loginname == loginame) {
                                loggedUser = user
                                //console.log('user==', user);
                               // console.log();
                            }

                        });
                    }
                    else {
                        return next(new CommonException('404', 'No User Found'));
                    }
                    if (Object.keys(loggedUser).length == 0) {
                        next(new CommonException('404', 'No User Found'));
                    }

                    if (md5(password) == (loggedUser.password.split("-").join("").toLowerCase())) {
                        const token = await jwt.sign(
                            { ...loggedUser },
                            process.env.JWT_SECRET,
                            {
                                expiresIn: 86400,
                            },
                        );
                        return response.status(200).json({
                            status: 200,
                            timestamp: Date.now(),
                            message: 'user logged in successfully',
                            success: true,
                            response: { user: loggedUser, token: token },
                        });
                    }

                    next(new CommonException('404', 'User and password does not match'));
                    // response.status(200).json(loggedUser)
                }
            })
            .catch(function (error) {
                next(new InternalServerErrorException(error));
                // console.log('errrr',error);
                // response.send({
                //     status: '500',
                //     message: error?error:'Internal server error'
                // })
            });
    }

    axiosRequest(method: any, request: Request, response: Response, next: NextFunction) {

        try {
            const { url }: MemoriaGetDTO = request.query;
            let query = request.query;
            delete query.url;
            let data = request.body;
            //console.log('request', request)
            console.log('dddd', 'http://146.4.123.42:5000/api' + url + '?' + querystring.stringify(query), process.env.MEMORIA_API_TOKEN, data);
            axios({
                method: method,
                url: 'http://146.4.123.42:5000/api' + url + '?' + querystring.stringify(query),
                validateStatus: function (status) {
                    return status < 600;
                },
                headers: { "Access-Control-Allow-Origin": "*", "Authorization": process.env.MEMORIA_API_TOKEN.toString() },
                data: data,
                maxContentLength: Infinity,
                maxBodyLength: Infinity

            })
                .then(function (res) {
                    // console.log('res',res,res.data)
                    if (res.data == '') {
                        next(new CommonException('404', 'No Record Found'));
                    }
                    else {
                        response.status(200).json(res.data)
                    }
                })
                .catch(function (error) {
                    response.send({
                        status: '500',
                        message: error
                    })
                });
        }
        catch (err) {
            next(new InternalServerErrorException(err));
        }
    }
}