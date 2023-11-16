// DonateModal.js
// ... import necessary components and hooks
import React, { useCallback, useEffect } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { toast } from "react-hot-toast";
import { donateToProject } from "../utils/projectActions";

export function DonateModal({ show, onClose, project, donation, setDonation, sender }) {
  const canDonate = useCallback(() => {
    const nowInSeconds = Date.now() / 1000;
    return (
      nowInSeconds > project.startDate &&
      !project.deleted &&
      !project.claimed &&
      nowInSeconds < project.endDate
    );
  }, [project]);

  useEffect(() => {
    console.log("Modal Open (in DonateModal.js):", show);
  }, [show]);

  const handleDonateClick = useCallback(async () => {
    if (!canDonate()) {
      toast.error("Donation not possible at this time.");
      return;
    }

    try {
      await donateToProject(sender, project, donation);
      toast.success("Donation successful!");
      onClose(); // Close the modal after donation
    } catch (error) {
      toast.error(`Donation failed: ${error.message}`);
    }
  }, [canDonate, sender, project, donation, onClose]);

  return (
    <MDBModal show={show} setShow={onClose} tabIndex="-1">
      {/* ... modal content ... */}
      <MDBModalFooter>
        <MDBBtn outline color="primary" onClick={onClose}>
          Close
        </MDBBtn>
        <MDBBtn
          color="primary"
          disabled={!canDonate()}
          onClick={(e) => {
            e.preventDefault();
            handleDonateClick();
          }}
        >
          Donate
        </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  );
}
