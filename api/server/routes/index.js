import Router from "express";
import {
  getALLSkill,
  getSkillid,
  newSkill,
  updateSkill,
  deleteSkill,
} from "../controllers/skills.js";

import {
  getRandomAchivements,
  getRandomAchivementsId,
  newRandomAchivements,
  updateRandomAchivements,
  deleteRandomAchivements,
} from "../controllers/randomAchivements.js";

import {
  getALLProjects,
  getProjectsid,
  newProjects,
  updateProjects,
  deleteProjects,
} from "../controllers/projetcts.js";

import {
  getALLProgrammingSkill,
  getProgrammingSkillId,
  newProgrammingSkill,
  updateProgrammingSkill,
  deleteProgrammingSkill,
} from "../controllers/programmingSkill.js";

import {
  getALLPersonalEx,
  getPersonalExid,
  newPersonalEx,
  updatePersonalEx,
  deletePersonalEx,
} from "../controllers/personalEx.js";

import {
  getALLOtherSkills,
  getOtherSkillsid,
  newOtherSkills,
  updateOtherSkills,
  deleteOtherSkills,
} from "../controllers/otherSkills.js";

import {
  getALLFutureProjects,
  getFutureProjectsid,
  newFutureProjects,
  updateFutureProjects,
  deleteFutureProjects,
} from "../controllers/futureProjects.js";

const routes = Router();

routes.get("/skill", getALLSkill);
routes.get("/skill/:id", getSkillid);
routes.get("/newSkill", newSkill);
routes.get("/updateSkill/:id", updateSkill);
routes.get("/deleteSkill/:id", deleteSkill);

routes.get("/RSkill", getRandomAchivements);
routes.get("/RSkill/:id", getRandomAchivementsId);
routes.get("/newRSkill", newRandomAchivements);
routes.get("/updateRSkill/:id", updateRandomAchivements);
routes.get("/deleteRSkill/:id", deleteRandomAchivements);

routes.get("/Project", getALLProjects);
routes.get("/Project/:id", getProjectsid);
routes.get("/newProject", newProjects);
routes.get("/updateProject/:id", updateProjects);
routes.get("/deleteProject/:id", deleteProjects);

routes.get("/PSkill", getALLProgrammingSkill);
routes.get("/PSkill/:id", getProgrammingSkillId);
routes.get("/newPSkill", newProgrammingSkill);
routes.get("/updatePSkill/:id", updateProgrammingSkill);
routes.get("/deletePSkill/:id", deleteProgrammingSkill);

routes.get("/Pex", getALLPersonalEx);
routes.get("/Pex/:id", getPersonalExid);
routes.get("/newPex", newPersonalEx);
routes.get("/updatePex/:id", updatePersonalEx);
routes.get("/deletePex/:id", deletePersonalEx);

routes.get("/OSkill", getALLOtherSkills);
routes.get("/OSkill/:id", getOtherSkillsid);
routes.get("/newOSkill", newOtherSkills);
routes.get("/updateOSkill/:id", updateOtherSkills);
routes.get("/deleteOSkill/:id", deleteOtherSkills);

routes.get("/FutureSkill", getALLFutureProjects);
routes.get("/Futureskill/:id", getFutureProjectsid);
routes.get("/newFutureSkill", newFutureProjects);
routes.get("/updateFutureSkill/:id", updateFutureProjects);
routes.get("/deleteFutureSkill/:id", deleteFutureProjects);

export { routes };
