export class LoginPage{


        username_textbox = '#username'
        password_textbox = '#password'
        login_button = '#submit'

        enterUsername(username){
            cy.get(this.username_textbox).type(username)

        }
        enterPassword(password){
            cy.get(this.password_textbox).type(password)

        }
        clickLogin(){
            cy.get(this.login_button).click()

        }













}