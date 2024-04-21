import React from "react";
import "./navbar.css";
import Sidebar from "../sidebar/sidebar";

import {
  ListCollapse,
  User,
  LogOut,
  HandHelping,
  BookUser,
} from "lucide-react";

// Icons

export default function Navbar() {
  return (
    <div className="nav-wrapper">
      <div className="nav-content d-flex justify-content-between align-items-center">
        <div className="nav-header">
          <h3 style={{ margin: 0 }}>Health Keeper</h3>
          <Sidebar />
        </div>
        <div className="login-icons">
          <div class="dropdown">
            <button
              class="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <User size={26} strokeWidth={1.5} />
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  <HandHelping size={20} strokeWidth={1.5} className="" />
                  <span className="m-2">Help</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <BookUser size={20} strokeWidth={1.5} />
                  <span className="m-2">Profile</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item primary" href="#">
                  <LogOut size={20} strokeWidth={1.5} />{" "}
                  <span className="m-2">Signout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
