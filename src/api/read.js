import firebase from "./../db/firebase";
export const getCountByCalon = ({ then, res }) => {
  firebase
    .database()
    .ref("QuickCount/")
    .on("value", function (snap) {
      if (then) {
        then(snap.val());
      }
    });
};

export const getUser = ({ then, res }) => {
  firebase
    .database()
    .ref("user/")
    .on("value", function (snap) {
      if (then) {
        then(snap.val());
      }
    });
};
