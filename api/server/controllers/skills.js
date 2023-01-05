import { SkillModule } from "../models/skill.js";

export const getALLSkill = async (req, res) => {
  const skill = await SkillModule.findAll({ where: { isWanted: 0 } });
  return res.send({ skill });
};

export const getALLSkillWanted = async (req, res) => {
  const skill = await SkillModule.findAll({ where: { isWanted: 1 } });
  return res.send({ skill });
};

export const getSkillid = async (req, res) => {
  const id = req.params.id;
  const skill = await SkillModule.findByPk(id);
  if (skill === null) {
    res.send("Não existe skill com id: " + id);
  }
  res.send({ skill });
};

export const newSkill = async (req, res) => {
  const newSkill = {
    title: req.body.title,
    description: req.body.description,
    isWanted: req.body.isWanted,
  };
  await SkillModule.create(newSkill);

  res.send({ newSkill });
};

export const updateSkill = async (req, res) => {
  const id = req.params.id;
  const skillUpdated = {
    title: req.body.title,
    description: req.body.description,
    isWanted: req.body.isWanted,
  };
  const skill = await SkillModule.findByPk(id);
  if (skill !== null) {
    skill.update(skillUpdated);
    return res.send("Skill  Updated");
  } else {
    return res.send("Não existe Skill com id: " + id);
  }
};

export const deleteSkill = async (req, res) => {
  const id = req.params.id;
  const skill = await SkillModule.findByPk(id);
  if (skill !== null) {
    skill.destroy({ where: { id: id } });
    return res.send("Skill  Deleted");
  } else {
    return res.send("Não existe Skill com id: " + id);
  }
};
