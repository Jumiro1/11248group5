import React from "react"

function Account(){
    return (
        <div className="App">
            <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
            <span class="font-weight-bold">User 1</span><span class="text-black-50">user1@ufl.edu</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="Name" value=""/></div>
                    <div class="col-md-6"><label class="labels">Position</label><input type="text" class="form-control" value="" placeholder="Position"/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" value=""/></div>
                    <div class="col-md-12"><label class="labels">Compnay</label><input type="text" class="form-control" placeholder="Company" value=""/></div>
                    <div class="col-md-12"><label class="labels">ID</label><input type="text" class="form-control" placeholder="ID" value=""/></div>
                    <div class="col-md-12"><label class="labels">Email</label><input type="text" class="form-control" placeholder="enter email" value=""/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""/></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"/></div>
                </div>
                <div class="mt-5 mb-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience"><span> Manage Team</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Team</span></div><br></br>
                <div class="col-md-12"><label class="labels">Add members</label><input type="text" class="form-control" placeholder="enter email" value=""/></div> <br></br>
                <div class="col-md-12"><label class="labels"> Upload Data</label><input type="text" class="form-control" placeholder="select files" value=""/></div>
            </div>
        </div>
    </div>
</div>
</div>
    );
}

export default Account;