import { videos } from "../db";
import routes from "../routes";

export const homeController = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};

export const searchController = (req, res) => {
  //   const searchingBy = req.query.term;
  const {
    query: { term: searchingBy },
  } = req;

  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const videosController = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });

export const getUploadController = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUploadController = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  // To Do: Upload and save video
  res.redirect(routes.videoDetail(123213));
};

export const videoDetailController = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideoController = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideoController = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
