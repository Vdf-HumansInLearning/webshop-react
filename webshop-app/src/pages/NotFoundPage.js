import "../css/NotFoundPage.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NotFoundPage() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: {duration: 0.1} }}
      className="main-notfound"
    >
      <div className="notfound-content">
        <h3 className="notfound-header">Oups...something went wrong</h3>
        <h4 className="notfound-link">
          Go back to{" "}
          <Link className="link" to="/">
            HOMEPAGE
          </Link>
        </h4>
      </div>
    </motion.div>
  );
}

export default NotFoundPage;
