return (
    <>
    <Grid container spacing={1} style={{ gridTemplateColumns: "repeat(3, 1fr)" }} alignItems="stretch">
      {props && props?.props && props?.props?.map((row: any,row_index: any) => ( 
        <Grid item xs={4} key={row_index}>
          <div
          //  className="container"
            style={{
              border: "1px solid #000000",
              borderRadius: "32px",
              height: "100%",
              marginBottom: "5px",
              marginLeft: "5px",
              width: "auto",
            }}
          >
            <CardContent
              className={"MuiCardContent-root"}
              onClick={() =>
                navigate( (props?.pageRouter === 'myproduct') ? `/my-product-detail/${row._id}` : `/product-detail/${row._id}`  , { state: { row } })
              }
              style={{ cursor: "pointer", padding: '24px' }}
            >
              <Grid style={{position:"relative"}} container spacing={2}>
                <div>
                  <div>
                    <Chip
                      style={{
                        background: "#D3BDF2",
                        marginLeft: "15px",
                        marginTop: "15px",
                        height: "20px",
                        fontFamily: "kenvue-sans-regular",
                        fontSize:"14px",
                      }}
                      // className="custom-chip"
                      label={row.type}
                      variant="outlined"
                    />
                  </div>
                </div>

                <Grid  xs={6} sm={6} style={{marginTop:"14px",marginLeft:"8px"}}>
                  <Grid container>
                    <Grid>
                      { props.sort_order === "Created Date" ? (
                        <>
                          <label style={{ fontFamily: "kenvue-sans-regular" , fontSize:"13.3px" }}>
                            Date Created:
                          </label>
                          <label style={{ fontFamily: "kenvue-sans-regular" , fontSize:"13.3px" }}>
                            &nbsp;{formatDate(row.createdAt.substr(0,10))}
                          </label>
                        </>
                      ) :(
                        <>  
                          <label style={{ fontFamily: "kenvue-sans-regular" , fontSize:"13.3px" }}>
                            Date Modified:
                          </label>
                          <label style={{ fontFamily: "kenvue-sans-regular" , fontSize:"13.3px" }}>
                            &nbsp;{formatDate(row.updatedAt.substr(0,10))}
                          </label>
                        </>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
               
              {( checkCRUDAccess(row.users,"product") === 1  ) && (

                <Grid item
                  style={{
                    // marginTop:"-9px",
                    // marginLeft:"-16px"
                    position:'absolute',
                    top:'5px',
                    right:"5px",
                    padding:"0px"
                  }}>
                  <Grid container>
                  <Grid>
                  
                  <IconButton onClick={(e)=>handleMoreHorizClick(e,row)}
                    onMouseDown={(e) => {
                      e.stopPropagation();
                    }} 
                    >
                    <MoreHorizIcon style={{ color: 'black' }}/>
                  </IconButton>
                  
                  <Menu
                    style={{
                      display: "block",
                      padding: "0px",
                    }}  
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}

                    elevation={1}
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    onMouseDown={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    
                    <MenuItem
                      style={{
                        display: "block",
                        width: "100px",
                        padding: "4px",
                      }}
                      onClick={(ev) =>
                        handleOpenDialog(ev,{
                          productName: slcRow.productName,
                          brandName: slcRow.brandName,
                          projectId: slcRow.projectId,
                          description: slcRow.description,
                          projectName: slcRow.projectName,
                          _id: slcRow._id,
                        })
                      }
                       className="menu_edit_delete_label"
                    >
                      &nbsp;Edit 
                      <ModeEditOutlinedIcon
                        style={{ width: "15px", float: "right" , paddingRight:"1px"}}
                      ></ModeEditOutlinedIcon>
                    </MenuItem>
                  
                    <Divider />
                  
                    <MenuItem
                      style={{
                        display: "block",
                        width: "100px",
                        padding: "4px",
                      }}
                      onClick={(ev) => handleOpenDeletePopup(ev,slcRow._id)}
                       className="menu_edit_delete_label"
                    >
                      &nbsp;Delete 
                      <DeleteIcon
                        style={{ width: "15px", float: "right" , paddingRight:"1px"}}
                      ></DeleteIcon>
                    </MenuItem>
                    {/* Add more menu items as needed */}
                  
                  </Menu>
                </Grid>
                </Grid>
              </Grid>

            )}

                <Grid item xs={12} sm={12}>
                  <Grid container style={{  display: "grid",
                                            gridAutoRows: "30px",
                                          }}>
                    <Grid>
                      <label
                        style={{
                          fontWeight: "700",
                          fontFamily: "kenvue-sans",
                          fontSize: "23px",
                        }}
                      >
                        {truncate(row.brandName,22)}
                      </label>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Grid container style={{  display: "grid",
                                            gridAutoRows: "48px",
                                          }}>
                    <Grid>
                      <label
                        style={{
                          fontFamily: "kenvue-sans-regular",
                          fontSize: "16px",
                          fontWeight:"400",   
                        }}
                      >
                        {truncate(row.productName,50)}
                      </label>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={6} sm={6}>
                  <Grid container>
                    <Grid>
                      <label
                        style={{
                          fontWeight: "700",
                          fontSize: "19px",
                          fontFamily: "kenvue-sans",
                        }}
                      >
                        SIP ID
                      </label>
                      
                      <div style={{height:"8px"}}></div>

                      <label style={{ fontFamily: "kenvue-sans-regular" , fontSize: "16px",fontWeight:"400" }}>
                        {row.productSipId}
                      </label>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Grid container>
                    <Grid>
                      <label
                        style={{
                          fontWeight: "700",
                          fontSize: "19px",
                          fontFamily: "kenvue-sans",
                        }}
                      >
                        Project ID
                      </label>

                      <div style={{height:"8px"}}></div>

                      <label style={{ fontFamily: "kenvue-sans-regular" , fontSize: "16px",fontWeight:"400" }}>
                        {(row.projectId === "") ? "N/A" : row.projectId}
                      </label>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={6} sm={6}>
                  <Grid container>
                    <Grid>
                      <AvatarGroup max={4} spacing={-2} 
                        sx={{ ["& .MuiAvatarGroup-avatar"]: { borderColor: "#BFBFBF" } }}
                        componentsProps={{
                                additionalAvatar: {
                                  sx: {
                                    backgroundColor: '#F8F8F8',
                                    fontWeight: 'bold',
                                    color: '#000000',
                                  }
                                }
                        }}>
                        {row?.users?.map((row_user: any , row_user_index: any)=>(
                            <Avatar key={row_user_index} sx={{ bgcolor: deepPurple[500] }} title={row_user.name}>{row_user.name.charAt(0)}</Avatar>
                        ))}  
                      </AvatarGroup>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Grid container>
                    <Grid>
                      <span
                        style={{
                          fontWeight: "700",
                          fontSize: "19px",
                          fontFamily: "kenvue-sans",
                          marginBottom:'10px'
                        }}
                      >
                        Description
                      </span>
                      
                      <div style={{height:"8px"}}></div>
                     
                      <span
                        style={{
                          fontFamily: "kenvue-sans-regular",
                          position:'relative',
                          top:'8px',
                          fontSize:"16px",
                          fontWeight:"400",
                        }}
                      >
                        {(row.description === "") ? "N/A" : truncate(row.description,100)}
                      </span>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </div>
        </Grid>
      ))}
    </Grid>
    <Popup
      key={dialogKey}
      open={dialogOpen}
      onClose={handleCloseDialog}
      onSubmit={handleSubmit}
      initialValues={initialProductValues}
      refetch = {props.refetch}
    />
    <DeletePopupBox
      open={deletePopupOpen}
      onClose={handleCloseDeletePopup}
      onDelete={handleDelete}
      dialogTitle= "Warning"
      dialogContent={WARNING_MSG_DELETE_PRODUCT}
    /> 
    { getToastContainer() }
    </>
  );
}

GridviewCard.getTheme = (muiBaseTheme: { spacing: { unit: number } }) => {
  const offset = 40;
  const cardShadow = "0px 14px 80px rgba(34, 35, 58, 0.2)";
  const headerShadow = "4px 4px 20px 1px rgba(0, 0, 0, 0.2)";
  return {
    MuiCard: {
      root: {
        "&.MuiElevatedCard--01": {
          marginTop: 50,
          borderRadius: muiBaseTheme.spacing.unit / 2,
          transition: "0.3s",
          boxShadow: cardShadow,
          position: "relative",
          width: "100%",
          overflow: "initial",
          background: "#ffffff",
          padding: `${muiBaseTheme.spacing.unit * 6}px 0`,
          "& .MuiCardHeader-root": {
            flexShrink: 0,
            position: "absolute",
            top: -offset,
            right: 20,
            left: 20,
            borderRadius: muiBaseTheme.spacing.unit / 2,
            backgroundColor: purple[600],
            overflow: "hidden",
            boxShadow: headerShadow,
            textAlign: "center",
            "& .MuiCardHeader-title": {
              color: "#ffffff",
              fontWeight: 900,
              letterSpacing: 1,
            },
            "& .MuiCardHeader-subheader": {
              color: "#ffffff",
              opacity: 0.87,
              fontWeight: 200,
              letterSpacing: 0.4,
            },
          },
          "& .MuiDivider-root": {
            marginLeft: muiBaseTheme.spacing.unit * 5,
            marginRight: muiBaseTheme.spacing.unit * 5,
            paddingTop: "5px",
            marginTop: 5,
            marginBottom: 5,
          },
          "& .MuiLabel-root": {
            paddingTop: "5px",
          },

          "& .MuiCardContent-root": {
            textAlign: "left",
            height: "auto",

            "& .MuiCardContent-inner": {
              paddingTop: "38px",
              overflowX: "auto",
            },},},},},},},

here is my component code. 
following is my scss file as ProductGridViewComponent.scss
$card-border-color : #000;
$chip-bg-color:#D3BDF2;

.container {
    border: 1px solid $card-border-color;
    border-radius: 32px;
    padding: 16px;
    height: 100%;
    width: auto;
    margin-left: 5px;
    margin-bottom: 5px;

}

.custom-chip {
    .MuiChip-root {
        background-color: $chip-bg-color;
        display: flex;
        padding: var(--Components-Tag-Padding-SidesY, 2px) var(--Components-Tag-Padding-SidesX, 8px);
        justify-content: center;
        align-items: center;
        gap: var(--Spacing-6, 6px);

    }
} . i need to make this as per the figma . i am provide you a figma file reference . my goal to make this cards responsive
main card have following CSS
width: Fill (430.33px)px;
height: Hug (474px)px;
padding: var(--Spacing24);
gap: 24px;
border-radius: var(--Spacing32);
border: 1px 0px 0px 0px;
opacity: 0px;
