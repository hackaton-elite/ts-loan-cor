import AbstractApprover = require('../Approver/AbstractApprover');

class LoanApprovalSummary {
    private _approvedStatus:boolean;

    private _approvedBy:AbstractApprover;

    constructor(approvedBy:AbstractApprover, approvedStatus:boolean) {
        this._approvedBy = approvedBy;
        this.approvedStatus = approvedStatus;
    }

    public get approvedStatus():boolean {
        return this._approvedStatus;
    }

    public set approvedStatus(value:boolean) {
        this._approvedStatus = value;
    }

    public get approvedBy():AbstractApprover {
        return this._approvedBy;
    }

    public set approvedBy(value:AbstractApprover) {
        this._approvedBy = value;
    }
}

export = LoanApprovalSummary;
