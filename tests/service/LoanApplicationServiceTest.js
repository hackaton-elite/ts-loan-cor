var LoanApplicationService = require('../../dist/js/service/LoanApplicationService');
var ApproverType = require('../../dist/js/constant/ApproverType');

describe('Loan Application Service', function () {
    var loanService = new LoanApplicationService();

    it ('should have a first node to start the chain', function() {
        expect(loanService.firstApprover).toBeDefined();
        expect(loanService.firstApprover.type).toEqual(ApproverType.AGENT);
    });

    it ('should manage a loan of 800 via an agent', function() {
        var loanApprovalSummary = loanService.processLoanRequest(800);

        expect(loanApprovalSummary.approvedStatus).toEqual(true);
        expect(loanApprovalSummary.approvedBy.type).toEqual(ApproverType.AGENT);
    });

    it ('should manage a loan of 3000 via a line manager', function() {
        var loanApprovalSummary = loanService.processLoanRequest(3000);

        expect(loanApprovalSummary.approvedStatus).toEqual(true);
        expect(loanApprovalSummary.approvedBy.type).toEqual(ApproverType.LINE_MANAGER);
    });

    it ('should manage a loan of 9999 via a line manager', function() {
        var loanApprovalSummary = loanService.processLoanRequest(9999);

        expect(loanApprovalSummary.approvedStatus).toEqual(true);
        expect(loanApprovalSummary.approvedBy.type).toEqual(ApproverType.LINE_MANAGER);
    });

    it ('should manage a loan of 10000 via a branch manager', function() {
        var loanApprovalSummary = loanService.processLoanRequest(10000);

        expect(loanApprovalSummary.approvedStatus).toEqual(true);
        expect(loanApprovalSummary.approvedBy.type).toEqual(ApproverType.BRANCH_MANAGER);
    });

    it ('should manage a loan of 30000 via a branch manager', function() {
        var loanApprovalSummary = loanService.processLoanRequest(30000);

        expect(loanApprovalSummary.approvedStatus).toEqual(true);
        expect(loanApprovalSummary.approvedBy.type).toEqual(ApproverType.BRANCH_MANAGER);
    });

    it ('should not allow for loans for more than 50000', function() {
        var loanApprovalSummary = loanService.processLoanRequest(51000);

        expect(loanApprovalSummary.approvedStatus).toEqual(false);
        expect(loanApprovalSummary.approvedBy.type).toEqual(ApproverType.BRANCH_MANAGER);
    });
});
