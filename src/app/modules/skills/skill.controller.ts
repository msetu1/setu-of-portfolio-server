import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatusCodes from 'http-status-codes';
import { SkillsService } from './skill.service';

const createSkills = catchAsync(async (req, res) => {
  const result = await SkillsService.createSkills(req.body);
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Skills created successfully!',
    data: result,
  });
});
const getAllSkills = catchAsync(async (req, res) => {
  const result = await SkillsService.getAllSkills();
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: ' Skills retrieved successfully!',
    data: result,
  });
});
const getSingleSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillsService.getSingleSkill(id);
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Single Skill retrieved successfully!',
    data: result,
  });
});
const updateSkill = catchAsync(async (req, res) => {
  const result = await SkillsService.updateSkill(
    req.params.id,
    req.body, // skillInfo
  );
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Skill updated successfully!',
    data: result,
  });
});

const deleteSkill = catchAsync(async (req, res) => {
  await SkillsService.deleteSkill(req.params.id);
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Skill deleted successfully!',
    data: [],
  });
});

export const SkillsController = {
  createSkills,
  getAllSkills,
  getSingleSkill,
  updateSkill,
  deleteSkill,
};
