import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import { TwitterShareButton, TwitterIcon } from "react-share";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import { FacebookShareButton, FacebookIcon } from "react-share";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { FitScreen } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  dispalyMoney,
  generateDiscountedPrice,
} from "../DisplayMoney/DisplayMoney";
import { addItemToCart } from "../../actions/cartAction";
import { useDispatch } from "react-redux";
// import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "280px",
    height: FitScreen,
    margin: theme.spacing(2),
    backgroundColor: "white",
    currsor: "pointer",
  },
  media: {
    height: 200,
    width: "90%",
    objectFit: "cover",
    margin: "1rem 1rem 0 1rem",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    borderRadius: 4,
    fontWeight: "bold",
    width: "100%",
    height: 45,
    "&:hover": {
      backgroundColor: "#ed1c24",
      color: "black",
      fontWeight: "bold",
    },
  },
  buttonW: {
    backgroundColor: "black",
    marginLeft: "10px",
    width: "20px",
    color: "white",
    borderRadius: 4,
    fontWeight: "bold",
    // width: "100%",
    height: 45,
    "&:hover": {
      backgroundColor: "#ed1c24",
      color: "black",
      fontWeight: "bold",
    },
  },
  oldPrice: {
    textDecoration: "line-through",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.6)",
    marginRight: theme.spacing(1),
  },
  finalPrice: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  description: {
    fontSize: "0.8rem",
    fontWeight: 500,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
  },
  shareIcon: {
    display: "flex",
    justifyContent: "space-around",
    // border: "2px solid red",
    alignItems: "center",
  },
  instagramButton: {
    backgroundColor: "#ed1c24",
    color: "white",
    borderRadius: "100%",
    width: "32px",
    height: "32px",
    outline: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    // fontWeight: "bold",
    // padding: "10px 20px",
    
    "&:hover": {
      backgroundColor: "#ed1c24",
    },
  },
}));

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  let discountPrice = generateDiscountedPrice(product.price);
  discountPrice = dispalyMoney(discountPrice);
  const oldPrice = dispalyMoney(product.price);

  const truncated =
    product.description.split(" ").slice(0, 5).join(" ") + "...";
  const nameTruncated = product.name.split(" ").slice(0, 3).join(" ") + "...";

  const addTocartHandler = (id, qty) => {
    dispatch(addItemToCart(id, qty));
  };

  // const handleWhatsAppShare = () => {
  //   // Generate the shareable link for the product
  //   const shareableLink = `${window.location.origin}/product/${product._id}`;

  //   // Format the message with product details
  //   const message = `${product.name}\nPrice: ${product.price}\nDescription: ${product.description}\nImage: ${product.images[0].url}\n${shareableLink}`;

  //   // Open WhatsApp with the formatted message
  //   const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(message)}`;
  //   window.open(whatsappUrl);
  // };

  const handleInstagramShare = () => {
    // Generate the shareable link for the product
    const shareableLink = `${window.location.origin}/product/${product._id}${product.images[0].url}`;

    // Open Instagram with the formatted message
    const instagramUrl = `instagram://library?AssetPath=${encodeURIComponent(
      shareableLink
    )}`;
    window.open(instagramUrl);
  };

  return (
    <Card className={classes.root}>
      <Link
        className="productCard"
        to={`/product/${product._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardActionArea>
          <CardMedia className={classes.media} image={product.images[0].url} />
          <CardContent>
            <Typography
              gutterBottom
              color="black"
              fontWeight="bold"
              style={{ fontWeight: "700" }}
            >
              {nameTruncated}
            </Typography>
            <Box display="flex" alignItems="center">
              <Rating
                name="rating"
                value={product.ratings}
                precision={0.1}
                readOnly
                size="small"
                style={{ color: "#ed1c24", marginRight: 8, fontWeight: "400" }}
              />
              <Typography variant="body2" color="textSecondary">
                ({product.numOfReviews})
              </Typography>
            </Box>
            <Typography
              variant="body2"
              color="textSecondary"
              component="div"
              className={classes.description}
            >
              {truncated}
            </Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="body1" className={classes.oldPrice}>
                {oldPrice}
              </Typography>
              <Typography variant="body1" className={classes.finalPrice}>
                {discountPrice}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Link>
      <Box display="flex" justifyContent="center" p={2}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => addTocartHandler(product._id, 1)}
        >
          Add to Cart
        </Button>
      </Box>

      <div className={classes.shareIcon}>
        <TwitterShareButton
          url={`${window.location.origin}/product/${product._id}`}
          title={product.name}
          className={classes.buttonW}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <FacebookShareButton
          // url={`${window.location.origin}/product/${product._id}?imageId=${product.images[0].id}`}
          url={`${window.location.origin}/product/${product._id}${product.images[0].url}`}
          title={product.name}
          className={classes.buttonW}
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <WhatsappShareButton
          // url={`${window.location.origin}/product/${product._id}?imageId=${product.images[0].id}`}
          url={`${window.location.origin}/product/${product._id}${product.images[0].url}`}
          title={product.name}
          className={classes.buttonW}
        >
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
        <div className={classes.instagramButton} onClick={handleInstagramShare}>
        
        <InstagramIcon size={128} />
        </div>
        {/* <Button
          variant="contained"
          className={classes.instagramButton}
          onClick={handleInstagramShare}
        >
          <InstagramIcon size={132} />
        </Button> */}
      </div>
    </Card>
  );
};

export default ProductCard;
