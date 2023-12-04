import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    currentUser: null,
    isLoggedIn: false,
    users: [
      {
        "id":1,
        "name": "John Doe",
        "email": "john@gmail.com",
        "password": "john123",
        "role": "owner"
      },
      {
        "id":2,
        "name": "Jane Smith",
        "email": "jane@gmail.com",
        "password": "jane123",
        "role": "user"
      }
    ],
    error: null,
  }),

  getters: {
    getUsers() {
      return this.users;
    },

    getCurrentUser() {
      return this.currentUser;
    },

    getIsLoggedIn() {
      return this.isLoggedIn;
    },

    getError() {
      return this.error;
    },
  },

  actions: {

    loginUser(credentials) {
      const foundUser = this.users.find(
        (user) =>
          user.email === credentials.email &&
          user.password === credentials.password
      );

      if (foundUser) {
        this.currentUser = foundUser;
        this.isLoggedIn = true;
        localStorage.setItem('currentUser', JSON.stringify(foundUser));
      } else {
        throw new Error('Invalid email or password. Please try again.');
      }
    },
      

    logoutUser() {
      this.currentUser = null;
      this.isLoggedIn = false;
      localStorage.removeItem("currentUser");
    },

    registerUser(newUser) {
        try {
          const isEmailTaken = this.users.some(
            (user) => user.email === newUser.email
          );
  
          if (isEmailTaken) {
            this.setError("Email already exists");
            throw new Error('Email already exists');
          } else {
            newUser.id = Math.floor(Math.random() * 100);
            this.createNewUser(newUser);
            this.clearError();
            return true; 
          }
        } catch (error) {
          this.setError("Error registering user");
          throw new Error('Error registering user');
        }
      },
  
      saveToUsersData(newUser) {
        this.users.push(newUser);
      },

    checkLocalStorage() {
      const storedUser = localStorage.getItem("currentUser");
      if (storedUser) {
        this.currentUser = JSON.parse(storedUser);
        this.isLoggedIn = true;
        return true;
      }

      return false;
    },

    setError(error) {
        this.error = error;
      },
  
      clearError() {
        this.error = null;
      },
         // CRUD operations for users
    createNewUser(newUser) {
        try {
          this.users.push(newUser);
        } catch (error) {
          this.setError("Error creating user");
        }
      },
  
      updateUser(updatedUser) {
        try {
          const index = this.users.findIndex((user) => user.id === updatedUser.id);
          if (index !== -1) {
            this.users[index] = updatedUser;
          } else {
            this.setError("User not found");
          }
        } catch (error) {
          this.setError("Error updating user");
        }
      },
  
      deleteUser(userId) {
        try {
          this.users = this.users.filter((user) => user.id !== userId);
        } catch (error) {
          this.setError("Error deleting user");
        }
      },

    fetchUsers() {
      this.users = usersData;
    }
  
  },
});
