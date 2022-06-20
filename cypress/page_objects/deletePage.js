class DeletePage{
    get organization(){
        return cy.get('.vs-c-media__object').eq(1)
    }
    get configureBtn(){
        return cy.get('.vs-c-site-logo').eq(8)
    }
    get deleteBtn(){
        return cy.get('.vs-c-btn--warning')
    }
   
    get okBtn(){
        return cy.get('.vs-c-btn--primary').eq(1)
    }
    get passInput(){
        return cy.get('input[type="password"]')
    
    }
    get yesBtn() {
            return cy.get('.el-button--success');
    }
    delete(){
        this.organization.click()
        this.okBtn.click()
        this.configureBtn.click()
        this.deleteBtn.click()
        this.passInput.type("test123")
        this.yesBtn.click()
    }
}
export const deletePage = new DeletePage()