import { useState } from "react";
// import './App.css';
import { FaStar } from "react-icons/fa";
import "./Rating.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function RatingHostel(props) {
  const { hostel_id, hostel_rating } = props;

  const logcheck = useSelector((state) => state.user.isLoggedIn);
  const user_id = useSelector((state) => state.user.userDetail.user_id);
  const is_manager = useSelector((state) => state.user.userDetail.is_manager);
  // console.log(hostel_id, hostel_rating,user_id, "from not rated")

  //   const [currentValue, setCurrentValue] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);
  const [prevRating, setPrevRating] = useState(); // rate done by user previosly
  const [newPrevRating, setNewPrevRating] = useState(); // new rate done by user
  const [raterId, setRaterId] = useState();
  const [newRating, setNewRating] = useState(0); //rating to send 
  const [rate, SetRate] = useState(0);
  const [CalcRating, setCalcRating] = useState(0);
  const [getRating, setGetRating] = useState({
    // user_id:user_id,
    // hostel_id:hostel_id
  });
  const [hoverValue, setHoverValue] = useState(undefined);
  //   const stars = Array(5).fill(0)

  const handleRatingClick = (value) => {
    // setCurrentValue(value)
    setSelectedRating(value);
    // console.log(currentValue)
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
    // console.log(hoverValue,'i am from hover')
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  if (hostel_id !== undefined) {
    getRating.hostel_id = hostel_id;
  }

  if (user_id !== undefined) {
    getRating.user_id = user_id;
  }

  useEffect(() => {
    setNewRating(selectedRating);
    setNewPrevRating(selectedRating);
    SetRate(selectedRating);
    // console.log(newRating, "newRating (from useEffect)"); // Will log the latest rating
  }, [selectedRating]);

  useEffect(() => {
    const fetchUserRating = async () => {
      try {
        const response1 = await axios.post(
          "http://127.0.0.1:8000/api/user-rate/",
          getRating
        );
        const prevRating = parseFloat(response1.data.user_rating);
        setPrevRating(parseFloat(prevRating));
        console.log("Response data:", response1.data);
        setRaterId(response1.data.rater_id);
        console.log("Rater id is : ", response1.data.rater_id);
        console.log(" Hostel id is :", hostel_id);
        console.log(" user rating as prevRating :", prevRating);
      } catch (error) {
        console.error("axios error patching wait");
      }
    };

    fetchUserRating();
  }, [getRating, hostel_id, user_id]);
  // ------------------------------------------------------------
  const handleSubmit = async (e) => {

    e.preventDefault();
    const givenRating = selectedRating;
    console.log(givenRating, "is givenRating taken from selected Rating");
    try {
        if (prevRating !== undefined && raterId !== undefined) {
          if (selectedRating === prevRating) {
            setNewRating(hostel_rating);
            setNewPrevRating(hostel_rating);
            console.log(newRating, "is new and prev is same as", newPrevRating);
            alert("Rating added successfully");
          } else if (prevRating == 0 && hostel_rating==0) {
            setNewRating(selectedRating);
            setNewPrevRating(selectedRating);
            console.log(
              newRating,
              "is new rate if hostel rate  is 0 having prev rate",
              newPrevRating,"hostel rateis :", hostel_rating
            );
            // alert("Hostel Rated Successfully");
      
            if (newRating !== 0 && hostel_rating!==0) {
              console.log(newRating,"rating being sent to patch")
              const response2 = await axios.patch(
                `http://127.0.0.1:8000/api/rate-hostel/${hostel_id}/`,
                { rating: newRating}
              );
              console.log("Update response data:", response2.data);
              console.log(newPrevRating, "newPrev ratings");
      
              const response3 = await axios.patch(
                `http://127.0.0.1:8000/api/new-user-rate/${raterId}/`,
                { user_rating: newPrevRating }
              );
      
              console.log(
                "Update newPrevRating response data:",
                response3.data
              );
              alert("Hostel Rated Successfully");
            }
          } else {
            console.log("before calc", hostel_rating,"selected rating",selectedRating)
            
            const newhostelrating = (parseFloat(hostel_rating) + selectedRating) / 2;
            console.log(
              newhostelrating,
              "is new prev after calc of user rating and",
              "selectedRating:",
              selectedRating,
              "prevRating:",
              prevRating, "prev hostel rate was:", hostel_rating
            );
            if (newhostelrating) {
              const hostelrate=newhostelrating.toFixed(2)

              const response2 = await axios.patch(
                `http://127.0.0.1:8000/api/rate-hostel/${hostel_id}/`,
                { rating: hostelrate }
              );
              console.log("Update response data:", response2.data);
      
              const response3 = await axios.patch(
                `http://127.0.0.1:8000/api/new-user-rate/${raterId}/`,
                { user_rating: newPrevRating }
              );
      
              console.log(
                "Update newPrevRating response data:",
                response3.data
              );
              alert("Hostel Rated Successfully");
            }
          }
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error submitting rating. Please try again.");
      }
      

    // try {
    //   if (prevRating !== undefined && raterId !== undefined) {
    //     if (selectedRating == prevRating) {
    //       setNewRating(hostel_rating);
    //       setNewPrevRating(hostel_rating);
    //       console.log(newRating, "is new and prev is same as", newPrevRating);
    //       alert("Rating added successfully");
    //     } else if (hostel_rating == 0) {
    //       setNewRating(selectedRating);
    //       setNewPrevRating(selectedRating);
    //       console.log(
    //         newRating,
    //         "is new rate if hostel rate is 0 having prev rate",
    //         newPrevRating
    //       );

    //       if (newRating !== 0) {
    //         const response2 = await axios.patch(
    //           `http://127.0.0.1:8000/api/rate-hostel/${hostel_id}/`,
    //           { rating: newRating }
    //         );
    //         console.log("Update response data:", response2.data);
    //         console.log(newPrevRating, "newPrev ratings");

    //         const response3 = await axios.patch(
    //           `http://127.0.0.1:8000/api/new-user-rate/${raterId}/`,
    //           { user_rating: newPrevRating }
    //         );

    //         console.log("Update newPrevRating response data:", response3.data);
    //         alert("Hostel Rated Successfully");
    //       }
    //     } else {
    //       const calcRate = (rate + parseFloat(hostel_rating)) / 2;
    //       console.log(
    //         calcRate,
    //         "is calc rating and",
    //         "rate :",
    //         rate,
    //         "hostel_rating:",

    //         hostel_rating
    //       );
    //       setNewRating(parseFloat(calcRate));
    //       setCalcRating(parseFloat(calcRate));
    //       console.log(
    //         "NewPrevRate",
    //         newPrevRating,
    //         "newRATING",
    //         newRating,
    //         "calcRating :",
    //         CalcRating
    //       );
    //       if (calcRate) {
    //         const response2 = await axios.patch(
    //           `http://127.0.0.1:8000/api/rate-hostel/${hostel_id}/`,
    //           { rating: calcRate }
    //         );
    //       }
    //       console.log("Update response data:", response2.data);
    //       console.log(newPrevRating, "newPrev ratings");

    //       const response3 = await axios.patch(
    //         `http://127.0.0.1:8000/api/new-user-rate/${raterId}/`,
    //         { user_rating: newPrevRating }
    //       );

    //       console.log("Update newPrevRating response data:", response3.data);
    //       alert("Hostel Rated Successfully");
    //     }
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    //   alert("Error submitting rating. Please try again.");
    // }
    
  };
  // const response3 =await axios.post('https://4734e750-1e5f-4f8c-b8d7-195e5c0b3724.mock.pstmn.io/Rating',{rating:String(newPrevRating)})

  // --------------------------------------------------------------

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const givenRating = selectedRating;
  //     console.log(givenRating, "I am from given rating");

  //     axios
  //       .post("http://127.0.0.1:8000/api/user-rate/", getRating)
  //       .then((response1) => {
  //         const prevRating = parseFloat(response1.data.user_rating);
  //         setPrevRating(prevRating);
  //         console.log("Response data:", response1.data);
  //         setRaterId(response1.data.rater_id);

  //         if (prevRating !== undefined) {
  //           if (selectedRating == prevRating) {
  //             setNewRating(hostel_rating);
  //             setNewPrevRating(hostel_rating);
  //             console.log(
  //               newRating,
  //               "is new and prev is same as",
  //               newPrevRating
  //             );
  //           } else if (hostel_rating == 0) {
  //             setNewRating(selectedRating);
  //             setNewPrevRating(selectedRating);
  //             console.log(
  //               newRating,
  //               "is new rate if hostel rate is 0 having prev rate",
  //               prevRating
  //             );
  //           } else {
  //             // const newRating = (selectedRating + hostel_rating) / 2;
  //             const calcRate=(rate+hostel_rating)/2;
  //             console.log(calcRate, "i am from calc","rate :",rate,"hostel_rating:",hostel_rating)
  //             setNewRating(calcRate);
  //             // setNewRating((selectedRating+hostel_rating)/2);
  //             // setNewPrevRating(prevRating);
  //             console.log("NewPrevRate", newPrevRating, "newRATING", newRating);
  //           }

  //           return axios.patch(
  //             `http://127.0.0.1:8000/api/rate-hostel/${hostel_id}/`,
  //             { "rating": String(newRating) }
  //           );
  //         }
  //       })
  //       .then((response2) => {
  //         console.log("Update response data:", response2.data);
  //         console.log(newPrevRating,"newPrev ratings")

  //         // Add another axios.patch call to update newPrevRating
  //         return axios.patch(
  //           `http://127.0.0.1:8000/api/new-user-rate/${raterId}/`,
  //           { "user_rating": newPrevRating }
  //         );
  //       })
  //       .then((response3) => {
  //         console.log("Update newPrevRating response data:", response3.data);
  //         alert("Hostel Rated Successfuly")
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //         alert("Error submitting rating. Please try again.");
  //       });
  //   };

  // ---------------------------------------------------------------

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const givenRating = selectedRating;
  //     console.log(givenRating, "I am from given rating");

  //     try {
  //       const response1 = await axios.post(
  //         "http://127.0.0.1:8000/api/user-rate/",
  //         getRating
  //       );
  //       const prevRating = parseFloat(response1.data.user_rating);
  //       setPrevRating(prevRating);
  //       console.log("Response data:", response1.data);
  //       setRaterId(response1.data.rater_id);

  //       if (prevRating !== undefined) {
  //         if (selectedRating === prevRating) {
  //           setNewRating(hostel_rating);
  //           setNewPrevRating(hostel_rating);
  //           console.log(
  //             newRating,
  //             "is new and prev is same as",
  //             newPrevRating
  //           );
  //         } else if (hostel_rating === 0) {
  //           setNewRating(selectedRating);
  //           setNewPrevRating(selectedRating);
  //           console.log(
  //             newRating,
  //             "is new rate if hostel rate is 0 having prev rate",
  //             prevRating
  //           );
  //         } else {
  //           const newRating = (selectedRating + hostel_rating) / 2;
  //           setNewRating(newRating);
  //           setNewPrevRating(prevRating);
  //           console.log("NewPrevRate", newPrevRating, "newRATING", newRating);
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //       alert("Error submitting rating. Please try again.");
  //     }
  //   };

  //   -------------------------------------------

  //   const handleSubmit= async(e)=>{
  //         const givenRating=selectedRating
  //         console.log(givenRating, " i am from given rating")

  //         console.log(givenRating, "given rating")
  //         e.preventDefault()
  //         try {
  //             const response1 = await axios.post("http://127.0.0.1:8000/api/user-rate/", getRating);
  //             setPrevRating(parseFloat(response1.data.user_rating))
  //             console.log("Response data:", response1.data);
  //             setRaterId(response1.data.rater_id)
  //             .then{} if(selectedRating==prevRating){
  //                 setNewRating(hostel_rating)
  //                 setNewPrevRating(hostel_rating)
  //                 console.log(newRating,"is new and prev is same as", newPrevRating)
  //             }
  //             else if (hostel_rating==0){

  //                 setNewRating(selectedRating)
  //                 setNewPrevRating(selectedRating)
  //                 console.log(newRating,"is new rate if hostel rate is 0 having prev rate",prevRating)
  //             }

  //             else{

  //                 setNewRating((selectedRating+hostel_rating)/2)
  //                 console.log("NewPrevRate",newPrevRating,"newRATING",newRating)
  //             }

  //         } catch (error) {
  //             console.error("Error:", error);
  //             alert("Error submitting rating. Please try again.");
  //         }

  //     }
  //     await axios.patch(`http://127.0.0.1:8000/api/user-rate/${hostel_id}/`,newRating)
  //     await axios.post('https://4734e750-1e5f-4f8c-b8d7-195e5c0b3724.mock.pstmn.io/Rating',{rating:newRating})

  return (
    <div style={styles.rating_container}>
      <div className="rate-container">
        <h2>Rate This Hostel </h2>

        <div style={styles.stars}>
          {/* {stars.map((_, index) => { */}
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <FaStar
                key={ratingValue}
                size={24}
                onClick={() => handleRatingClick(ratingValue)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverValue || selectedRating) >= ratingValue
                    ? colors.orange
                    : colors.grey
                }
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
                aria-label={`Rate ${ratingValue} star`}
              />
            );
          })}
        </div>
        {/* <textarea
        placeholder="What's your experience?"
        style={styles.textarea}
      /> */}

        {logcheck ? (
          is_manager ? ( <p className="uncheck-sign">Manager Can't Rate</p> ) :
          <button
            style={styles.rate_button}
            className="rate-button"
            onClick={handleSubmit}
          >
            Rate
          </button>
        ) : (
          <p className="uncheck-sign">Sign In to Rate </p>
        )}
      </div>
    </div>
  );
}

const styles = {
  rating_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,

    margin: 20,
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  rate_button: {
    // border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 200,
    padding: 10,
    position: "relative",
    top: 10,
    bottom: 10,
  },
};

export default RatingHostel;
