require("@babel/polyfill");

import 'core-js/features/promise';
import 'core-js/features/object/values';
import 'core-js/features/array/includes';

import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

const increaseNumber = () => {
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};



const sendComment = async comment => {
    const videoId = window.location.href.split("/videos/")[1];

    const response = await axios({
        url: `/api/${videoId}/comment`,
        method: "POST",
        data: {
            comment
        }
    });
    console.log(response);

    //window.onload = function () {

    if (response.status === 200) {
        addComment(comment);
    }
    //}
};



const addComment = comment => {
    const div = document.createElement("div");
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = comment;
    li.appendChild(span);
    div.appendChild(li);
    div.classList.add('comment_box');
    div.classList.add('comment_box_forFakeCommnet');
    

    // console.log("li  : ", li)
    // console.log("li.appendChild(span)", li.appendChild(span))
    // console.log("li.appendChild(span).inerhtml", li.appendChild(span).innerHTML)
    // console.log("commentList,", commentList)
    commentList.prepend(div);
    increaseNumber();
};
//consloe.log("window.onload : ", window.onload)





const handleSubmit = event => {
    event.preventDefault();
    const commentInput = addCommentForm.querySelector("input");
    const comment = commentInput.value;
    sendComment(comment);
    commentInput.value = "";
};

function init() {
    addCommentForm.addEventListener("submit", handleSubmit);

    if (addCommentForm) {
        console.log("init function")
        console.log("addCommentForm : ", addCommentForm)
    }
}



if (addCommentForm) {
    console.log("init real ")
    init();
}

