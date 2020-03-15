describe('Tomar pantallazos', function () {

    it('Pantallazo 1', function () {
        
        cy.visit('https://taller6-f91bb.firebaseapp.com/')
        cy.get('[onclick="generarPaleta()"]').click()
        cy.screenshot('pantallazo1')
       
    })

    it('Pantallazo 2', function () {
        
        cy.visit('https://taller6-f91bb.firebaseapp.com/')
        cy.get('[onclick="generarPaleta()"]').click()
        cy.screenshot('pantallazo2')
       
    })
})