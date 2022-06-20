class Board {
    get organization(){
            return cy.get('.vs-c-media__object').eq(3)
        }
    get okBtn(){
            return cy.get('.vs-c-btn--primary').eq(1);
    }
    get boards(){
        return cy.get('.vs-c-site-logo').eq(0)
    }
    get boardNew(){
            return cy.get('.vs-c-media')
        }
         
    get boardTitle(){
        return cy.get('input[name="name"]')
       }
    get nextBtn() {
        return cy.get('button[name="next_btn"]');
        
    }
    get scrumCheck(){
        return cy.get(".vs-c-radio-check").first();
    }
    
    get boardLogoNext() {
        return cy.get('button[name="next_btn"]');
    }
    get finishBtn(){
        return cy.get(".el-button--success").eq(1);
    }
    newBoard(validName){
        this.organization.click();
        this.okBtn.click()
        this.boardNew.click();
        this.boardTitle.type(validName)
        this.nextBtn.click();
        this.scrumCheck.click();
        this.nextBtn.click();
        this.nextBtn.click();
        this.boardLogoNext.click();
        this.finishBtn.click();
    }
    
    
    
    }export const board = new Board();