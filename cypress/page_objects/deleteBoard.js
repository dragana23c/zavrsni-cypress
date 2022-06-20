class DeleteBoard{
    get deleteBtn(){
        return cy.get('.vs-c-btn--warning')
    }
    get yesBtn() {
        return cy.get('.el-button--success');
}
boardDelete(){
    
    this.deleteBtn.click();
    this.yesBtn.click();
}
}
export const deleteBoard = new DeleteBoard
