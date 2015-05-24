var LoanApplicationService = require('../../dist/js/app');

describe('Loan Application Service', function () {
    var loanService = new LoanApplicationService();

    var result = loanService.processLoanRequest(3000);
    console.log(result);
    //console.log(new Loan.LoanApplicationService());
    //var loanService = new Loan;
    //console.log(loanService);

    /*it ('should have a first node to start the chain', function() {
        expect(loanService.firstApprover).toNotBeNull();
    });*/
});
