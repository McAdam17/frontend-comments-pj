import './App.css';
import React,{useState} from 'react';
import Commenter from './components/Commenter';
import Comments from './components/Comments';

function App() {
  const [currentComment, setCurrentComment] = useState({});
  const [newComment,setNewComment] = useState({});
  const [deletedComment, setDeletedComment] = useState({});
  const [updatedComment, setUpdatedComment] = useState({});
  
  const editingComment = (comment) =>{
    setCurrentComment(comment);
  }

  const deletingComment = (comment) =>{
    setDeletedComment(comment);
  }

  const addingNewComment = (comment) =>{
    setNewComment(comment);
  }

  const updatingComment = (comment) =>{
    setUpdatedComment(comment);
  }

  return (
    <div>
      <Comments 
        editingComment={editingComment} 
        newComment={newComment} 
        deletingComment={deletingComment} 
        deletedComment={deletedComment} 
        updatedComment={updatedComment}/>
      <Commenter 
        comment={currentComment} 
        addingNewComment={addingNewComment} 
        updatingComment={updatingComment}
        editingComment={editingComment}
      />
    </div>
  );
}

export default App;
