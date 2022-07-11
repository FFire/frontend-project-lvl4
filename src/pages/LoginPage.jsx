import { LoginForm } from "../components/LoginForm.jsx";
import logo from "../assets/Login.jpeg";

export const LoginPage = (props) => (
  <div class="h-100">
    <div class="h-100" id="chat">
      <div class="d-flex flex-column h-100">
        <nav class="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
          <div class="container">
            <a class="navbar-brand" href="/">
              Hexlet Chat
            </a>
          </div>
        </nav>
        <div class="container-fluid h-100">
          <div class="row justify-content-center align-content-center h-100">
            <div class="col-sm-11 col-md-10 col-lg-9 col-xl-8 col-xxl-7">
              <div class="card shadow-sm">
                <div class="card-body row p-5">
                  <div class="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <img src={logo} className="rounded-circle" alt="login" />
                  </div>

                  <LoginForm />
                </div>
                <div class="card-footer p-4">
                  <div class="text-center">
                    <span>Нет аккаунта?</span> <a href="/signup">Регистрация</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="Toastify"></div>
    </div>
  </div>
);
