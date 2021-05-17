import firebase from "@/plugins/firebase";
import { firestoreAction } from "vuexfire";

const db = firebase.firestore();
const todosRef = db.collection("todos");

export const state = () => ({
  todos: []
});

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef("todos", todosRef);
  }),
  add: firestoreAction((context, name) => {
    // 空白スペース削除
    if (name.trim()) {
      todosRef.add({
        name: name,
        done: false,
        created: firebase.firestore.FieldValue.serverTimestamp() // これでサーバーが生成したタイムスタンプを取得できる
      });
    }
  }),
  remove: firestoreAction((context, id) => {
    todosRef.doc(id).delete();
  }),
  toggle: firestoreAction((context, todo) => {
    todosRef.doc(todo.id).update({
      done: !todo.done
    });
  })
};
