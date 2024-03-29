import { ProgrammingModule } from "../models/programmingSkill.js";

export const getALLProgrammingSkill = async (req, res) => {
  const PS = await ProgrammingModule.findAll({ where: { isWanted: 0 } });
  return res.send({ PS });
};

export const getALLProgrammingSkillWanted = async (req, res) => {
  const PS = await ProgrammingModule.findAll({ where: { isWanted: 1 } });
  return res.send({ PS });
};

export const getProgrammingSkillId = async (req, res) => {
  const id = req.params.id;
  const PS = await ProgrammingModule.findByPk(id);
  if (PS === null) {
    res.send("Não existe Programming Skill com id: " + id);
  }
  res.send({ PS });
};

export const newProgrammingSkill = async (req, res) => {
  const newPS = {
    title: req.body.title,
    description: req.body.description,
    isWanted: req.body.isWanted,
  };
  await ProgrammingModule.create(newPS);

  res.send({ newPS });
};

export const updateProgrammingSkill = async (req, res) => {
  const id = req.params.id;
  const PSUpdated = {
    title: req.body.title,
    description: req.body.description,
    isWanted: req.body.isWanted,
  };
  const PS = await ProgrammingModule.findByPk(id);
  if (PS !== null) {
    PS.update(PSUpdated);
    return res.send("Programming Skill  Updated");
  } else {
    return res.send("Não existe Programming Skill com id: " + id);
  }
};

export const deleteProgrammingSkill = async (req, res) => {
  const id = req.params.id;
  const PS = await ProgrammingModule.findByPk(id);
  if (PS !== null) {
    PS.destroy({ where: { id: id } });
    return res.send("Programming Skill  Deleted");
  } else {
    return res.send("Não existe Programming Skill com id: " + id);
  }
};
