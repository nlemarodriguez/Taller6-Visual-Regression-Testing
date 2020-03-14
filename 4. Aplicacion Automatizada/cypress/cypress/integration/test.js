describe('Tomar pantallazos', function () {

    it('Pantallazo 1', function () {
        
        cy.visit('http://192.168.56.1:8887/palette.html')
        cy.get('[onclick="generarPaleta()"]').click()
        cy.screenshot('pantallazo1')
       
    })

    it('Pantallazo 2', function () {
        
        cy.visit('http://192.168.56.1:8887/palette.html')
        cy.get('[onclick="generarPaleta()"]').click()
        cy.screenshot('pantallazo2')
       
    })
})