import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("pages/home.tsx"),
    route("/before_you_go", "pages/before_you_go.tsx"),
    route("/contact", "pages/contact.tsx"),
    route("/calender", "pages/calender.tsx"),
    route("/locations", "pages/locations.tsx"),
    route("/look", "pages/look.tsx"),
    route("/report", "pages/report.tsx"),
    route("/rescue", "pages/rescue.tsx"),
    route("/accordion", "pages/accordion.tsx"),

] satisfies RouteConfig;
