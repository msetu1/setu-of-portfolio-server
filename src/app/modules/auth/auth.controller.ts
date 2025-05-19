import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthService } from './auth.service';
import httpStatusCodes from 'http-status-codes';

const createAdmin = catchAsync(async (req, res) => {
  const result = await AuthService.createAdmin(req.body);
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Registration successfully',
    data: result,
  });
});

// login Admin
const loginAdmin = catchAsync(async (req, res) => {
  const result = await AuthService.loginAdmin(req.body);
  const { accessToken } = result;

  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Logged in successfully!',
    data: {
      accessToken,
    },
  });
});

export const AuthController = {
  createAdmin,
  loginAdmin,
};
