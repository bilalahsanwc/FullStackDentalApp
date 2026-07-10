import { motion } from "framer-motion";
function TestimonialCard({ review, name }) {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <p>{review}</p>
        <span className="testimonial-name">{name}</span>
      </div>
    </div>
  );
}

export default TestimonialCard;
