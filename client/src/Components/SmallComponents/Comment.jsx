import React, { useEffect } from "react";
import "./Comment.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Comment = (props) => {
  const { hostel_id } = props;
  console.log(hostel_id, "hostel id is i am from comment");
  const user_id = useSelector((state) => state.user.userDetail.user_id);
  const logcheck = useSelector((state) => state.user.isLoggedIn);
  console.log("logcheck:",logcheck)
  const is_manager = useSelector((state) => state.user.userDetail.is_manager);
  console.log("from comment user_id:", user_id, "hostel id:", hostel_id);
  const [review_id, setReviewId] = useState();
  const [review, setReview] = useState();
  const [commented, setCommented] = useState(false);
  const [hostelReviews, setHostelReviews] = useState([]);

  useEffect(() => {
    console.log("comment from hostel_id:", hostel_id);
    const fetchReviews = async () => {
      try {
        const resp3 = await axios.get(
          `http://127.0.0.1:8000/api/hostel-review/${hostel_id}`
        );
        console.log(resp3.data);
        console.table(resp3.data);
        setHostelReviews(resp3.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchReviews();
  }, [hostel_id, commented]);

  useEffect(() => {
    console.log("useeffect user id", user_id, "hostel", hostel_id);
    if (user_id) {
      const getreview = async () => {
        try {
          const resp = await axios.get(
            `http://127.0.0.1:8000/api/user-review/${user_id}/${hostel_id}/`
          );
          console.log(resp.data);
          setReviewId(resp.data.review_id);
          setReview(resp.data.review);
          console.log("commented :", commented);
        } catch (err) {
          console.error(err);
        }
      };
      getreview();
    }
  }, [user_id, hostel_id, commented]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    console.log("review id :", review_id, "review:", review);

    if (review_id === false) {
      try {
        const resp = await axios.post(
          "http://127.0.0.1:8000/api/new-user-review/",
          { review: review, user_id: user_id, hostel_id: hostel_id }
        );
        console.table(resp.data);
        setCommented(true);
        alert("your review is taken");
      } catch (err) {
        console.error(err);
      }
    } else {
      if (review_id != undefined) {
        try {
          const rep2 = await axios.patch(
            `http://127.0.0.1:8000/api/update-user-review/${review_id}/`,
            { review: review }
          );
          console.table(rep2.data);
          setCommented(true);
        } catch (err) {
          console.error(err);
        }
      }
    }
  };

  return (
    <>
      <div className="comment-section">
        <h2>Leave a Review </h2>
        <form onSubmit={handleReviewSubmit}>
          <div className="form-group">
            <label htmlFor="comment">Review:</label>
            {logcheck ? (
              is_manager ? (
                <textarea placeholder="Manager cannot review"></textarea>
              ) : (
                <div>
                  <textarea
                    id="comment"
                    name="comment"
                    placeholder={review_id ? "" : "write a review"}
                    defaultValue={review_id ? review : null}
                    onChange={(e) => setReview(e.target.value)}
                  ></textarea>
                  <button type="submit">Submit</button>
                </div>
              )
            ) : (
              <textarea placeholder="log in to review"></textarea>
            )}
          </div>
        </form>
        <hr />
        <br />
        {hostelReviews.length !== 0 ? (
          hostelReviews.map((rev) => {
            return (
              <div key={rev.review_id}>
                <div class="comment-box">
                  <div class="user-info">
                    <img src={rev.user_id.picture} alt="User Avatar" loading="lazy"/>
                    <h4>{rev.user_id.name}</h4>
                  </div>
                  <div class="comment">
                    <p>
                      {rev.review}
                    </p>
                  </div>
                  <div class="comment-actions"></div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No reviews yet</p>
        )}
      </div>
    </>
  );
};

export default Comment;
