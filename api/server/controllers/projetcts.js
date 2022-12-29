import { ProjectsModule } from "../models/projects.js";

export const getALLProjects = async (req, res) => {
  const Projects = await ProjectsModule.findAll();
  return res.send({ Projects });
};

export const getProjectsid = async (req, res) => {
  const id = req.params.id;
  const Projects = await ProjectsModule.findByPk(id);
  if (Projects === null) {
    res.send("Não existe Projects com id: " + id);
  }
  res.send({ Projects });
};

export const newProjects = async (req, res) => {
  const newProjects = {
    title: req.body.title,
    description: req.body.description,
  };
  await ProjectsModule.create(newProjects);

  res.send({ newProjects });
};

export const updateProjects = async (req, res) => {
  const id = req.params.id;
  const ProjectsUpdated = {
    title: req.body.title,
    description: req.body.description,
    isWanted: req.body.isWanted,
  };
  const Projects = await ProjectsModule.findByPk(id);
  if (Projects !== null) {
    Projects.update(ProjectsUpdated);
    return res.send("Projects  Updated");
  } else {
    return res.send("Não existe Projects com id: " + id);
  }
};

export const deleteProjects = async (req, res) => {
  const id = req.params.id;
  const Projects = await ProjectsModule.findByPk(id);
  if (Projects !== null) {
    Projects.destroy({ where: { id: id } });
    return res.send("Projects  Deleted");
  } else {
    return res.send("Não existe Projects com id: " + id);
  }
};
