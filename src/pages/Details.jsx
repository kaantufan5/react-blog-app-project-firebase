import React, {useContext, useState} from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { DeleteBlog, UpdateBlog, useFetch } from "../helpers/functions";
import { AuthContext } from "../contexts/AuthContext";


const Details = () => {
  const { isLoading, blogList } = useFetch();
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const {id} = useParams()
  const myData = blogList?.filter(item => item.id === id);

  // const editUser = (id, username, phoneNumber, gender) => {
  //   setInfo({ id, username, phoneNumber, gender });
  // };

  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;

  const DeleteFunc = (id) => {
    DeleteBlog(id, navigate)
  }

  const initialValues = { 
    title: "", 
    imageURL: "", 
    context: "",
  };

  const [info, setInfo] = useState(initialValues);

  const editBlog = (id, title, imageURL, context) => {
    setInfo({ id, title, imageURL, context });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (info.id) {
      UpdateBlog(info);
    } 
    setInfo(initialValues);
  };

  const handleChange = (e) => {
    e.preventDefault();
    // const name=e.target.name;
    // const value=e.target.value;
    const { name, value } = e.target;
    // console.log(name,value)
    setInfo({ ...info, 
      [name]: value,
      email: currentUser.email,
      displayName: currentUser.displayName,
      userId: currentUser.uid,
      createdTime: dateTime,
    });
  };


  return (
<div>
{ currentUser 
  ?
  (
    isLoading ? (
      <h1>Loading...</h1>
    ) : myData?.length === 0 ? (
      <h1>No result found!</h1>
    ) : (
      String(currentUser.uid) === String(myData && myData[0].userId) ? (
        <div className="card text-bg-dark detail-div">
    <img src={myData && myData[0].imageURL} className="card-img detail-image" alt={myData && myData[0].title}/>
    <div className="card-img-overlay detail-texts">
      <h1 className="card-title">{myData && myData[0].title}</h1>
      <p className="card-text">{myData && myData[0].context}</p>
      <p className="card-text">{myData && myData[0].createdTime}</p>
      <h3 className="text-capitalize display"><a className="text-white writer" href={`mailto: ${myData && myData[0].email}`}>{myData && myData[0].displayName}</a></h3>



<div id="myModal" className="modal fade">
	<div className="modal-dialog modal-confirm">
		<div className="modal-content">
			<div className="modal-header flex-column">
				<div className="icon-box">
					<i className="material-icons">&#xE5CD;</i>
				</div>						
				<h4 className="modal-title w-100">Are you sure?</h4>	
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			</div>
			<div className="modal-body">
				<h5>Do you really want to delete these blog?</h5>
			</div>
			<div className="modal-footer justify-content-center">
				<button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" onClick={() => DeleteFunc(id)} className="btn btn-danger" data-dismiss="modal">Delete</button>
			</div>
		</div>
	</div>
</div>     


<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title text-dark h3" id="exampleModalLabel">Edit Blog</h5>
        <button type="button" className="close bg-danger edit-close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" className="font">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label text-dark">Title:</label>
            <input type="text" name="title" value={info.title} className="form-control" onChange={handleChange} id="recipient-name"/>
          </div>
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label text-dark">Image URL:</label>
            <input type="text" name="imageURL" value={info.imageURL} className="form-control" onChange={handleChange} id="recipient-name"/>
          </div>
          <div className="form-group">
            <label htmlFor="message-text" className="col-form-label text-dark">Context:</label>
            <textarea className="form-control" onChange={handleChange} value={info.context} name="context" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handleEdit}>Edit Blog</button>
      </div>
    </div>
  </div>
</div>

      <br />
      <div className="blog-btn">
      <button
      className="btn btn-danger delete-btn-blog"
      href="#myModal" 
      data-toggle="modal"
      >
      Delete Blog
      </button>

      {/* <Link to="/"> */}
      <button
      className="btn btn-warning reset-btn-blog"
      type="button" 
      data-toggle="modal" 
      data-target="#exampleModal"
      onClick={() => editBlog(
        myData && myData[0].id,
        myData && myData[0].title,
        myData && myData[0].imageURL,
        myData && myData[0].context
      )}
      >
      Edit Blog
      </button>
      {/* </Link> */}
      </div>

    </div>
  </div>

  
      ) : (
          <div className="card text-bg-dark detail-div">
    <img src={myData && myData[0].imageURL} className="card-img detail-image" alt={myData && myData[0].title}/>
    <div className="card-img-overlay detail-texts">
      <h1 className="card-title">{myData && myData[0].title}</h1>
      <p className="card-text">{myData && myData[0].context}</p>
      <p className="card-text">{myData && myData[0].createdTime}</p>
      <h3 className="text-capitalize display"><a className="text-white writer" href={`mailto: ${myData && myData[0].email}`}>{myData && myData[0].displayName}</a></h3>
    </div>
  </div>
        )
    )
  )
  :
  (
    navigate('/undefined')
  )
}
</div>
  )
};

export default Details;
