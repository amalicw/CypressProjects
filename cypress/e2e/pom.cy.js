import { LoginPage } from "./page/login_page"

    const loginPage = new LoginPage()

    describe('All login tests', function(){

        beforeEach(function(){
            cy.visit('https://practicetestautomation.com/practice-test-login/')
        })

        it('Login 1', function(){

                    
            loginPage.enterUsername('student')
            loginPage.enterPassword('Password123')
            loginPage.clickLogin()
            cy.contains('Home').click()
            
        
        })
        
        it('Login 2', function(){
    
     
            loginPage.enterUsername('student')
            loginPage.enterPassword('Password123')
            loginPage.clickLogin()
            cy.contains('Home').click()
            
        
        })

    })

