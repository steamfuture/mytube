import routes from "../routes";

export const getJoinController = (req, res) =>
  res.render("join", { pageTitle: "Join" });

export const postJoinController = (req, res) => {
  console.log(req.body);
  const {
    body: { name, email, password, password2 },
  } = req;

  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // To Do: Register User
    // To Do: Log user in
    res.redirect(routes.home);
  }
};

export const getLoginController = (req, res) =>
  res.render("login", { pageTitle: "Login" });

export const postLoginController = (req, res) => {
  //  사용자 비밀번호가 데이터베이스에 저장된 비밀번호와 같은지 검사 처리기능 필요
  res.redirect(routes.home);
  res.render("login", { pageTitle: "Login" });
};

export const logoutController = (req, res) =>
  res.render("logout", { pageTitle: "Logout" });

export const usersController = (req, res) =>
  res.render("users", { pageTitle: "Users" });

export const userDetailController = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });

export const editProfileController = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });

export const changePasswordController = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
