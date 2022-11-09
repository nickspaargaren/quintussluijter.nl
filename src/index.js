import "./style.css";
import { dom, library } from "@fortawesome/fontawesome-svg-core";
import {
	faFacebookSquare,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookSquare, faInstagram);

dom.i2svg();
