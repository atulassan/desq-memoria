import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { login } from "../../redux/actions/auth.action";
//class Login extends Component<any, any> {
type FormData = {
	loginname: string,
	password: string,
};
const Login = (props: any) => {

	//render() {
	const { register, errors, handleSubmit } = useForm<FormData>({
		criteriaMode: "all"
	});
	//const [formData, setFormData] = React.useState<FormData>()

	const onSubmit = async (data: FormData) => {
		console.log('data',data);
		props.dispatch(login(data.loginname, data.password));
	}
	return (
		<div>
			<header className="header">
				<div className="logo">
					<Link to="" className="navbar-brand">
						<img src="/assets/images/logo-white.png" alt="logo" title="Desq" />
					</Link>
				</div>
			</header>
			<section id="welcome" className="section">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-6 col-lg-6 col-right order-md-2 ">
							<div className="col-body-content-container">
								<div className="col-body-content">

									<div id="register">
									<form onSubmit={handleSubmit(onSubmit)}>
										<h1>Anmelden</h1>
										<div className="row">
										
												<div className="col-lg-12 col-md-12 ">
													<div className="form-group">
														<label>Benutzername</label>
														<input type="text" name="loginname" ref={register({ required: "This input is required." })} className="form-control" placeholder="" />
														{/* <span class="errorMsg">Field is Required</span>*/}
														<ErrorMessage
														errors={errors}
														name="loginname"
														render={({ messages }) => {
															return messages
																? Object.entries(messages).map(([type, message]) => (
																	<span className="errorMsg" key={type}>{message}</span>
																))
																: null;
														}}
													/>
													</div>
													
												</div>
												<div className="col-lg-12 col-md-12 ">
													<div className="form-group">
														<label>Passwort</label>
														<div className="form-icon-base">
															<input name="password" type="password" ref={register({ required: "This input is required." })} className="form-control" placeholder="" />
															<span className="form-icon"><img src="/assets/images/svg/eye-view.svg" /></span>
															{/*<span className="form-icon"><img src="/assets/images/svg/eye-hide.svg" /></span>*/}
														</div>
														{/* <span class="errorMsg">Field is Required</span>*/}
														<ErrorMessage
														errors={errors}
														name="password"
														render={({ messages }) => {
															return messages
																? Object.entries(messages).map(([type, message]) => (
																	<span className="errorMsg" key={type}>{message}</span>
																))
																: null;
														}}
													/>
													</div>
													
												</div>
											
										</div>

										<div className="btnFooter">
											<div className="row">
												<div className="col-lg-12 col-md-12">
													<div className="form-group">
														<p><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />  Passwort speichern</label></p>
													</div>
												</div>
												<div className="col-lg-12 col-md-12 ">
													<div className="form-group">
													<input className="btn-theme btn-block" value="Anmelden" type="submit" />
														{/* <Link to="" className="btn-theme btn-block">Anmelden</Link> */}
													</div>
												</div>
											</div>
										</div>
										</form>
									</div>
									
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-left order-md-1 mHeightLogin">
							<div className="left-content">
								<div className="col-body-content text-left">
									<h4>Von unterschiedlichen Anwendungen zum einheitlichen Betriebssystem</h4>
									<p>Ersetzen Sie Ihr Flickwerk aus Cloud-Anwendungen, veralteten Tools und papierbasierten Prozessen durch ein einziges Betriebssystem für Ihr gesamtes Unternehmen.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)

	//}
}
function mapStateToProps(state: any) {
	console.log('statta', state);
	const { isLoggedIn } = state.client.isLoggedIn;
	const { message } = state.messages;
	return {
		isLoggedIn,
		message
	};
}
export default connect(mapStateToProps)(Login)
//export default Login
