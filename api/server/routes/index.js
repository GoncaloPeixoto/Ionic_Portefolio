import Router from "express";
import {
  getALLSkill,
  getSkillid,
  newSkill,
  updateSkill,
  deleteSkill,
  getALLSkillWanted,
} from "../controllers/skills.js";

import {
  getRandomAchivements,
  getRandomAchivementsId,
  newRandomAchivements,
  updateRandomAchivements,
  deleteRandomAchivements,
  getALLRandomAchivementsWanted,
} from "../controllers/randomAchivements.js";

import {
  getALLProjects,
  getProjectsid,
  newProjects,
  updateProjects,
  deleteProjects,
  getALLgetALLProjectsWanted,
} from "../controllers/projetcts.js";

import {
  getALLProgrammingSkill,
  getProgrammingSkillId,
  newProgrammingSkill,
  updateProgrammingSkill,
  deleteProgrammingSkill,
  getALLProgrammingSkillWanted,
} from "../controllers/programmingSkill.js";

import {
  getALLPersonalEx,
  getALLPersonalExWanted,
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
  getALLOtherSkillsWanted,
} from "../controllers/otherSkills.js";

import {
  getALLFutureProjects,
  getFutureProjectsid,
  newFutureProjects,
  updateFutureProjects,
  deleteFutureProjects,
  getALFutureProjectsWanted,
} from "../controllers/futureProjects.js";

const routes = Router();

routes.get("/skill", getALLSkill);
routes.get("/skillWanted", getALLSkillWanted);
routes.get("/skill/:id", getSkillid);
routes.post("/newSkill", newSkill);
routes.post("/updateSkill/:id", updateSkill);
routes.delete("/deleteSkill/:id", deleteSkill);

routes.get("/RA", getRandomAchivements);
routes.get("/RAWanted", getALLRandomAchivementsWanted);
routes.get("/RA/:id", getRandomAchivementsId);
routes.post("/newRA", newRandomAchivements);
routes.post("/updateRA/:id", updateRandomAchivements);
routes.delete("/deleteRA/:id", deleteRandomAchivements);

routes.get("/Projects", getALLProjects);
routes.get("/ProjectsWanted", getALLgetALLProjectsWanted);
routes.get("/Project/:id", getProjectsid);
routes.post("/newProject", newProjects);
routes.post("/updateProject/:id", updateProjects);
routes.delete("/deleteProject/:id", deleteProjects);

routes.get("/PS", getALLProgrammingSkill);
routes.get("/PSWanted", getALLProgrammingSkillWanted);
routes.get("/PSkill/:id", getProgrammingSkillId);
routes.post("/newPSkill", newProgrammingSkill);
routes.post("/updatePSkill/:id", updateProgrammingSkill);
routes.delete("/deletePSkill/:id", deleteProgrammingSkill);

routes.get("/Pex", getALLPersonalEx);
routes.get("/PexWanted", getALLPersonalExWanted);
routes.get("/Pex/:id", getPersonalExid);
routes.post("/newPex", newPersonalEx);
routes.post("/updatePex/:id", updatePersonalEx);
routes.delete("/deletePex/:id", deletePersonalEx);

routes.get("/Oskills", getALLOtherSkills);
routes.get("/OskillsWanted", getALLOtherSkillsWanted);
routes.get("/OSkill/:id", getOtherSkillsid);
routes.post("/newOSkill", newOtherSkills);
routes.post("/updateOSkill/:id", updateOtherSkills);
routes.delete("/deleteOSkill/:id", deleteOtherSkills);

routes.get("/FP", getALLFutureProjects);
routes.get("/FPWanted", getALFutureProjectsWanted);
routes.get("/Futureskill/:id", getFutureProjectsid);
routes.post("/newFutureSkill", newFutureProjects);
routes.post("/updateFutureSkill/:id", updateFutureProjects);
routes.delete("/deleteFutureSkill/:id", deleteFutureProjects);

export { routes };
