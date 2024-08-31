import React from "react";
import { Typography, Container, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MetaData from "../component/layouts/MataData/MataData";
import TermsImage from "../Image/about/tc.jpg";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  about_us: {
    paddingTop: "8rem",
    paddingBottom: "4rem",
    backgroundColor: "white !important",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  container_12: {
    padding: "2rem",
    textAlign: "center",

    backgroundColor: "white !important",
    maxWidth: "100%",
  },
  image_about: {
    width: "100%",
    height: "auto",
    marginTop: "3rem",
    marginBottom: "2rem",
  },
  title_about: {
    color: "#414141",
    fontSize: "14px",
    padding: "2rem 1rem 2rem",
    fontFamily: "Roboto",
    fontWeight: "500 !important",
  },
  heading12_about: {
    fontSize: "1rem",
    padding: "2rem 1rem 2rem",
    fontWeight: "400 !important",
    color: "#414141",
    textAlign: "center",
  },
  introText_about: {
    maxWidth: "800px",

    lineHeight: "1.5",
    margin: "1.5rem 0",
    color: "#292929",
    fontSize: "1.2rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 1rem",
  },
  infoText_about: {
    lineHeight: "1.5",
    margin: "2rem 0",
    color: "#292929",
    fontSize: "1rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 1rem",
  },
  buttonContainer_about: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem 0",
    width: "100%",
    marginTop: "1rem",
  },
  button1_about: {
    backgroundColor: "#000000 !important",
    color: "white !important",
    width: "fit-content !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "3.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
  button2_about: {
    backgroundColor: "#292929 !important",
    color: "white   !important",
    width: "fit-content     !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "1.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
}));

const About_UsPage = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.about_us}>
        <MetaData title={"About Us"} />
        <Container className={classes.container_12}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <img
                src={TermsImage}
                alt="VirtueShop"
                className={classes.image_about}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h2"
                component="h1"
                className={classes.title_about}
              >
                About Us
              </Typography>
              <Typography variant="body1" className={classes.introText_about}>
              At VirtueShop, we are dedicated to transforming the landscape of online shopping in Pakistan. Our commitment to innovation is reflected in our use of cutting-edge augmented reality (AR) technology, which sets us apart in the e-commerce industry. By integrating AR into our virtual trial rooms, customers can immerse themselves in a unique shopping experience, visualizing how products will fit and look in real-time. This advanced feature not only reduces the uncertainty associated with online shopping but also minimizes returns, thereby enhancing overall customer satisfaction and confidence in their purchases.
              </Typography>
              <Typography variant="body1" className={classes.introText_about}>
              VirtueShop prioritizes customer-centric solutions. Our platform is designed with user convenience in mind, offering a seamless and intuitive interface for browsing, searching, and purchasing products. From personalized recommendations based on customer preferences and body measurements to secure and hassle-free payment integration, every aspect of VirtueShop is tailored to provide a delightful shopping journey. Our dedication to excellence, coupled with our passion for innovation, makes VirtueShop the ultimate destination for modern shoppers seeking convenience, quality, and cutting-edge technology in their online shopping experience.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.container_12}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.heading12_about}
          >
            Who We Are
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
          VirtueShop is more than just an e-commerce platform - we are pioneers of innovation in online shopping. With a relentless focus on customer satisfaction and cutting-edge technology, we have redefined the way people shop online in Pakistan. Our team comprises passionate individuals driven by a shared vision to create a seamless and engaging shopping experience for every customer. We believe in leveraging the latest advancements in augmented reality (AR) technology to bridge the gap between traditional retail and online shopping, allowing customers to virtually try on clothing items and visualize how they will look in real life.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
          Our commitment to excellence extends beyond technology; we are dedicated to curating a diverse range of high-quality products from trusted brands. Whether it's fashion, accessories, electronics, or home essentials, VirtueShop offers a carefully curated selection to cater to every customer's needs and preferences. We take pride in providing a user-friendly platform that makes browsing, selecting, and purchasing products a breeze. Our customer-centric approach ensures that each interaction with VirtueShop is memorable, efficient, and tailored to meet the unique requirements of our valued customers.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
          At VirtueShop, integrity, transparency, and reliability are at the core of everything we do. We strive to build lasting relationships with our customers based on trust, authenticity, and exceptional service. Our mission is to empower shoppers with a convenient, enjoyable, and secure online shopping experience that exceeds their expectations. With VirtueShop, you can shop with confidence, knowing that you are part of a forward-thinking community dedicated to redefining the future of e-commerce in Pakistan.
          </Typography>
        </Container>
        <Container className={classes.container_12}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.heading12_about}
          >
            Our Mission
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
          At VirtueShop, our mission is to revolutionize the online shopping landscape in Pakistan by providing a seamless and immersive experience that transcends traditional boundaries. We aim to empower customers with innovative technology, such as augmented reality (AR), to make informed purchase decisions confidently. Our mission is to bridge the gap between online and in-store shopping by offering virtual try-on solutions, personalized recommendations, and a diverse range of high-quality products from trusted brands.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
          We are committed to enhancing customer satisfaction, reducing return rates, and increasing retailer profitability through our cutting-edge solutions. Our mission is fueled by a passion for innovation, customer-centricity, and a drive to set new benchmarks in the e-commerce industry. With VirtueShop, our mission is not just about transactions; it's about creating memorable experiences, fostering trust, and shaping the future of online retail in Pakistan.
          </Typography>

          <div className={classes.buttonContainer_about}>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button1_about}>
                Our Products
              </Button>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button2_about}>
                Contact Us
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About_UsPage;
