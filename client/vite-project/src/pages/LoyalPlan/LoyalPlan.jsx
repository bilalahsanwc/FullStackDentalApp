import React from "react";
import Header from "../../components/Header/Header";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import { CircleCheck } from "lucide-react";
import "./LoyalPlan.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import { scaleIn, fadeLeft, fadeIn, fadeUp } from "../../assets/animation";
import { motion } from "framer-motion";
import SEO from "../../components/SEO/SEO";
function LoyalPlan() {
  return (
    <div className="loyalDentalPlanPage">
      <SEO
        title="Loyal Plan | Loyal Dentistry"
        description="Discover our affordable dental membership plan designed to make quality care more accessible."
      />

      <Header></Header>
      <HeroComponent
        animation={scaleIn}
        heading="The loyal dental plan"
        bgPath={"/images/loyalPlan.png"}
      ></HeroComponent>
      <section className="loyalDentalPlan">
        <div className="loyalDentalPlan-content">
          <div className="loyalplan-content-r1">
            <motion.h3 {...fadeLeft} className="loyalDentalPlan-content-h3">
              Frustrated with your dental insurance or Frustrated because you
              don't have insurance?
            </motion.h3>
            <motion.p {...fadeLeft} className="loyalDentalPlan-content-p">
              PPO Dental insurance can be helpful because you are given a
              certain amount per year that goes towards dental treatment. If
              your company pays for some of the premium and you cover the rest,
              it may be worth having. BUT, sometimes it is frustrating as there
              are some limitations and rules that "get in the way."
            </motion.p>
          </div>
          <div className="loyalplan-content-r2">
            <span className="loyalplan-content-r2-head">
              What are some of these frustrations/limitations?
            </span>
            <ul>
              <motion.li {...fadeUp}>
                Annual maximums exist (often the insurance amount allotted only
                covers only one crown or one root canal treatment per year)
              </motion.li>
              <motion.li {...fadeUp}>
                Certain procedures (such as root canal treatment) have waiting
                periods of 6-12 months where insurances will not cover that
                until that amount of time has passed, even though your health is
                in jeopardy and you need treatment right away.
              </motion.li>
              <motion.li {...fadeUp}>
                Some procedures have exclusions where even though you absolutely
                need treatment, insurances will not pay anything even though you
                have money left on your insurance
              </motion.li>
              <motion.li {...fadeUp}>
                Some procedures get downgraded by insurances without any rhyme
                or reason. For example, a composite ("white filling") will often
                get downgraded to an amalgam ("silver filling") automatically by
                your insurance company even though you did not get a silver
                filling. This affects the payment given to your dentist.
              </motion.li>
              <motion.li {...fadeUp}>
                Often there are yearly deductible payments that must be paid by
                you before insurances pay anything.
              </motion.li>
              <motion.li {...fadeUp}>
                There are claims that the dental office has to file and often
                payment takes a long time to process and sometimes you will
                receive annoying statements from the office requesting payment
                that the insurance company has not paid.
              </motion.li>
              <motion.li {...fadeUp}>
                Some procedures need pre-determinations sent to the insurance
                company to get approval for payment. This can take up to 2
                months in some circumstances. So, you would have to wait for
                their reply before being allowed to start treatment...treatment
                that sometimes is necessary right away so decay doesn't grow
                into the pulp (nerve) for example.
              </motion.li>
            </ul>
          </div>
          <hr />
          <motion.div {...fadeIn} className="loyalplan-content-r3">
            <h4>WHY CHOOSE LOYAL DENTAL PLAN?</h4>
            <div className="loyalPlanListContainer">
              <div className="loyalPlanListContainer-content">
                <p>
                  <span>
                    <CircleCheck className="loyalPlanIcon"></CircleCheck>
                  </span>
                  The Loyal Dental Plan is a plan honored at all of our
                  affiliated Loyal Offices.{" "}
                </p>
                <p>
                  <span>
                    <CircleCheck className="loyalPlanIcon"></CircleCheck>
                  </span>
                  Most of the above mentioned frustrations and limitations with
                  PPO insurances are completely eliminated.
                </p>
                <p>
                  <span>
                    <CircleCheck className="loyalPlanIcon"></CircleCheck>
                  </span>
                  Please talk to our knowledgeable front office staff to get
                  details on how to sign up and take full advantage of this plan
                  so your dental health can be maintained in a timely manner!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default LoyalPlan;
