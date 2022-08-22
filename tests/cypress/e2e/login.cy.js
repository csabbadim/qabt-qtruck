import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'

describe('Login', () => {
  it('deve logar com sucesso', () => {
    const user = {
      name:'cat',
      instagram: 'cat',
      password: 'cat'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    mapPage.loggedUser(user.name)
    //cy.login(user)
    //cy.loggedUser(user.instagram)
  })

  it('não deve logar com senha incorreta', () => {
    const user = {
      instagram: 'cat',
      password: '123'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
    //cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })

  it('não deve logar com instagram inexistente', () => {
    const user = {
      instagram: 'cat123',
      password: 'cat'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
    //cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })

  it('instagram deve ser obrigatório', () => {
    const user = {
      instagram:'',
      password: '123'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')
    //cy.modalHaveText('Por favor, informe o seu código do Instagram!')
  })

  it('senha deve ser obrigatória', () => {
    const user = {
       instagram: 'cat',
       password: ''
     }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')
    //cy.modalHaveText('Por favor, informe a sua senha secreta!')
  })

  it('todos os campos são obrigatórios', () =>{
    const user = {
      instagram: '',
      password: ''
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe suas credenciais!')
    //cy.modalHaveText('Por favor, informe suas credenciais!')
  })

})