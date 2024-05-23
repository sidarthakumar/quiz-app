import React from "react";

const Register = () => {
  // Js code
  $(".signup").css("display", "none");

  $(".signbtn").click(function () {
    $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
  });

  $("#showhide").click(function () {
    var pass = $("#myinput");
    if (pass.attr("type") == "password") {
      pass.attr("type", "text");
    } else {
      pass.attr("type", "password");
    }
  });
  //End of Js code
  return (
    <div class="form">
      <form class="form-horizontal signin">
        <div class="form-wrap" style="position: relative;">
          <h2>Login</h2>
          <div class="form-group">
            {/* <label for="email">Username:</label> --> */}
            <div class="relative">
              <input
                class="form-control"
                id="name"
                type="text"
                required=""
                autofocus=""
                title=""
                autocomplete=""
                placeholder="Username"
              />
              <i class="fa fa-user"></i>
            </div>
          </div>

          <div class="form-group">
            {/* <!-- <label for="email">Password:</label> --> */}
            <div class="relative">
              <input
                class="form-control"
                type="password"
                required=""
                placeholder="Password"
              />
              <i class="fa fa-key"></i>
            </div>
            <span class="pull-right">
              <small>
                <a href="#">Forgot Password?</a>
              </small>
            </span>
          </div>

          <div class="login-btn">
            <a href="#">
              <button class="movebtn movebtnsu" type="Submit">
                Login <i class="fa fa-fw fa-lock"></i>
              </button>
            </a>
            <div class="relative">
              <hr />
              <span class="login-text">or login with</span>
            </div>
            <div class="clearfix"></div>
            <div class="social-btn clearfix">
              <a href="#">
                <button class="movebtn google" type="Submit">
                  Google <i class="fa fa-fw fa-google"></i>
                </button>
              </a>
              <a href="#">
                <button class="movebtn facebook" type="Submit">
                  Facebook <i class="fa fa-fw fa-facebook"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="sign-up">
          <a href="#" class="signbtn">
            <small>
              Not a member? Sign Up <i>(Click me)</i>
            </small>
          </a>
        </div>
      </form>

      <form class="form-horizontal signup">
        <div class="form-wrap" style="position: relative;">
          <h2>Sign Up</h2>

          <div class="form-group">
            {/* <!-- <label for="email">Username:</label> --> */}
            <div class="relative">
              <input
                class="form-control"
                id="name"
                type="text"
                required=""
                autofocus=""
                title=""
                autocomplete=""
                placeholder="Email Address"
              />
              <i class="fa fa-envelope"></i>
            </div>
          </div>
          <div class="form-group">
            {/* <!-- <label for="email">Username:</label> --> */}
            <div class="relative">
              <input
                class="form-control"
                id="name"
                type="text"
                required=""
                autofocus=""
                title=""
                autocomplete=""
                placeholder="Username"
              />
              <i class="fa fa-user"></i>
            </div>
          </div>

          <div class="form-group">
            {/* <!-- <label for="email">Password:</label> --> */}
            <div class="relative">
              <input
                id="myinput"
                class="form-control"
                type="password"
                required=""
                placeholder="Password"
              />
              <i class="fa fa-key"></i>
            </div>
            <span class="pull-right">
              <small>
                <a href="#" id="showhide">
                  show / hide
                </a>
              </small>
            </span>
          </div>

          <div class="login-btn">
            <a href="#">
              <button class="movebtn movebtnsu" type="Submit">
                Submit <i class="fa fa-fw fa-paper-plane"></i>
              </button>
            </a>
            <div class="relative">
              <hr />
              <span class="login-text">or signup with</span>
            </div>
            <div class="clearfix"></div>
            <div class="social-btn clearfix">
              <a href="#">
                <button class="movebtn google" type="Submit">
                  Google <i class="fa fa-fw fa-google"></i>
                </button>
              </a>
              <a href="#">
                <button class="movebtn facebook" type="Submit">
                  Facebook <i class="fa fa-fw fa-facebook"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="sign-up">
          <a href="#" class="signbtn">
            <small>
              Already member? Sign in <i>(Click me)</i>
            </small>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
