const VerifyEmailTemplate = ({ name, url })=> {
    return`
        <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>Welcome to Sellzaar, ${name}!</h2>
            <p>Please verify your email address by clicking the link below:</p>
            <a href="${url}" style="display: inline-block; padding: 10px 15px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">
                Verify Email
            </a>
            <p>If you did not create an account, please ignore this email.</p>
        </div>
    `;
}
 export default VerifyEmailTemplate