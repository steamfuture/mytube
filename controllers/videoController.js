export const homeController = (req, res) =>
  res.render("home", { pageTitle: "Home" });

export const searchController = (req, res) => {
  //   const searchingBy = req.query.term;
  const {
    query: { term: searchingBy },
  } = req;

  res.render("search", { pageTitle: "Search", searchingBy });
};

export const videosController = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });

export const uploadController = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const videoDetailController = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideoController = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideoController = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
