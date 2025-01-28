import ArrowRight3Img from "../../../assets/images/icon/arrow-right3.svg";
import { useForm } from "react-hook-form";
import Field from "../../common/Field";

function MessageForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		console.log("Submite Form Data = ", formData);
	};

	return (
		<form onSubmit={handleSubmit(submitForm)}>
			<div className="aximo-form-field">
				<Field error={errors.name}>
					<input
						{...register("name", { required: "Name is required." })}
						type="text"
						name="name"
						id="name"
						placeholder="Your Name"
					/>
				</Field>
			</div>
			<div className="aximo-form-field">
				<Field error={errors.email}>
					<input
						{...register("email", { required: "Email is required." })}
						type="email"
						name="email"
						id="email"
						placeholder="Your email address"
					/>
				</Field>
			</div>
			<div className="aximo-form-field">
				<input type="text" placeholder="+088-234-6849" />
			</div>
			<div className="aximo-form-field">
				<textarea name="textarea" placeholder="Write your message here..."></textarea>
			</div>
			<button id="aximo-submit-btn" type="submit">
				Send message{" "}
				<span>
				<svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
								stroke="#A49ABC"
								strokeWidth="3"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
				</span>
			</button>
		</form>
	);
}

export default MessageForm;
