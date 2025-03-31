const forgotPasswordTemplate = ({ name, otp }) => {
    return `
<div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background: #f9f9f9;">
    <p style="font-size: 18px; font-weight: bold;">Dear ${name},</p>
    <p style="font-size: 16px;">You requested a password reset. Please use the following OTP code to reset your password:</p>
    
    <div style="background: #ffeb3b; font-size: 24px; padding: 15px; text-align: center; font-weight: bold; border-radius: 5px; margin: 20px 0;">
        ${otp}
    </div>

    <p style="font-size: 14px; color: #555;">This OTP is valid for <strong>1 hour only</strong>. Enter this OTP on the Sellzaar website to proceed with resetting your password.</p>
    
    <p style="margin-top: 20px;">Thanks,</p>
    <p style="font-weight: bold;">Sellzaar Team</p>
</div>
    `;
};

export default forgotPasswordTemplate;
