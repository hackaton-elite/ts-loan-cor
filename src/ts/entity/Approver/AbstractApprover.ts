import LoanApprovalSummary = require('../Loan/LoanApprovalSummary');
import LoanRequest = require('../Loan/LoanRequest');

class AbstractApprover {
    private _type:string;

    private _threshold:number;

    private _nextInChain:AbstractApprover;

    public constructor(type:string, threshold:number) {
        this._type = type;
        this._threshold = threshold;
    }

    public handle(loanRequest:LoanRequest):LoanApprovalSummary {
        if (loanRequest.value < this.threshold) {
            return this.approveLoan();
        }

        return this.nextInChain.handle(loanRequest);
    }

    public approveLoan():LoanApprovalSummary {
        return new LoanApprovalSummary(this, true);
    }

    public rejectLoan():LoanApprovalSummary {
        return new LoanApprovalSummary(this, false);
    }

    public get type():string {
        return this._type;
    }

    public set type(value:string) {
        this._type = value;
    }

    public get threshold():number {
        return this._threshold;
    }

    public set threshold(value:number) {
        this._threshold = value;
    }

    public get nextInChain():AbstractApprover {
        return this._nextInChain;
    }

    public set nextInChain(value:AbstractApprover) {
        this._nextInChain = value;
    }
}

export = AbstractApprover;
