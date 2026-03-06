const Group = require('../models/group.models');

const getAllgroups = async (req,res)=>{
  try{
    const groups = await Group.find();

    res.status(200).json({
      status: "success",
      length: groups.length,
      message: "Groups returned successfully",
      data: groups
    });

  }catch(err){
    console.error(err);
    res.status(500).json({status:"error", message: err.message});
  }
}

const createGroup = async (req,res) =>{
  try{
    const {number,type,mentor} = req.body;

    const newGroup = await Group.create({number,type,mentor});

    res.status(201).json({
      status: "success",
      message: "Group created successfully",
      data: newGroup
    });
  }catch(err){
    console.error(err);
    res.status(500).json({status:"error", message: err.message});
  }
}

const updateGroup = async (req,res) =>{
  try{
    const { id } = req.params; 
    const updates = req.body; 

    const updatedGroup = await Group.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    );

    if (!updatedGroup) {
      return res.status(404).json({ status: "fail", message: "Group not found" });
    }

    res.status(200).json({
      status: "success",
      message: "Group updated successfully",
      data: updatedGroup
    });

  }catch(err){
    console.error(err);
    res.status(500).json({status:"error", message: err.message});
  }
}

const deleteGroup = async (req,res) =>{
  try{
    const {id} = req.params; 
    const deleted = await Group.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ status: "fail", message: "Group not found" });
    }

    res.status(200).json({
      status: "success",
      message: "Group successfully deleted"
    });

  }catch(err){
    console.error(err);
    res.status(500).json({status:"error", message: err.message});
  }
}

module.exports = {getAllgroups,createGroup,updateGroup,deleteGroup};