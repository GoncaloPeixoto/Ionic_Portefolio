import { OtherSkillsModule } from "../models/otherSkills.js";

export const getALLOtherSkills = async (req, res) => {
  const Oskills = await OtherSkillsModule.findAll();
  return res.send({ Oskills });
};

export const getOtherSkillsid = async (req, res) => {
  const id = req.params.id;
  const Oskills = await OtherSkillsModule.findByPk(id);
  if (Oskills === null) {
    res.send("Não existe Other skill com id: " + id);
  }
  res.send({ Oskills });
};

export const newOtherSkills = async (req, res) => {
  const newOskills = {
    title: req.body.title,
    description: req.body.description,
  };
  await OtherSkillsModule.create(newOskills);

  res.send({ newOskills });
};

export const updateOtherSkills = async (req, res) => {
  const id = req.params.id;
  const OskillsUpdated = {
    title: req.body.title,
    description: req.body.description,
    isWanted: req.body.isWanted,
  };
  const Oskills = await OtherSkillsModule.findByPk(id);
  if (Oskills !== null) {
    Oskills.update(OskillsUpdated);
    return res.send("Other Skill  Updated");
  } else {
    return res.send("Não existe Other Skill com id: " + id);
  }
};

export const deleteOtherSkills = async (req, res) => {
  const id = req.params.id;
  const Oskills = await OtherSkillsModule.findByPk(id);
  if (Oskills !== null) {
    Oskills.destroy({ where: { id: id } });
    return res.send("Skill  Deleted");
  } else {
    return res.send("Não existe Other Skill com id: " + id);
  }
};
