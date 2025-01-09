// Project Data
const projectData = {
  project1: {
    title: "DeltaV Security Implementation",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    description: `
              <h4>Project Overview</h4>
              <p>Led the implementation of comprehensive cybersecurity solutions for DeltaV systems at Emerson Export Engineering Center...</p>
              
              <h4>Key Responsibilities</h4>
              <ul>
                <li>Designed and implemented Firewall-IPD configuration for critical systems</li>
                <li>Established Network Security Monitoring infrastructure</li>
                <li>Integrated SIEM solutions for threat detection</li>
                <li>Deployed advanced endpoint security measures</li>
              </ul>

              <h4>Technologies Used</h4>
              <ul>
                <li>DeltaV System & Security Tools</li>
                <li>Network Security Monitor</li>
                <li>SIEM Integration</li>
                <li>Endpoint Protection Platforms</li>
              </ul>

              <h4>Results</h4>
              <p>Enhanced system security with 75% reduction in security incidents and achieved ISA/IEC 62443 compliance.</p>
            `
  },
  project2: {
    title: "Pharma Industry Automation",
    category: "Industrial Automation",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: `
              <h4>Project Overview</h4>
              <p>Spearheaded automation systems development for pharmaceutical manufacturing at Rockwell Automation...</p>

              <h4>Key Responsibilities</h4>
              <ul>
                <li>PLC system implementation and GAMP5 validation</li>
                <li>Process control system design</li>
                <li>Integration with existing infrastructure</li>
                <li>Team training and documentation</li>
              </ul>

              <h4>Technologies Used</h4>
              <ul>
                <li>Rockwell PLC Systems</li>
                <li>SCADA Integration</li>
                <li>HMI Development</li>
                <li>Validation Tools</li>
              </ul>

              <h4>Results</h4>
              <p>Achieved 99.9% system reliability and 40% reduction in production downtime.</p>
            `
  },
  project3: {
    title: "SCADA System Implementation",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1580706483913-b6ea7db483a0",
    description: `
              <h4>Project Overview</h4>
              <p>Designed and implemented comprehensive SCADA systems for industrial process control...</p>

              <h4>Key Responsibilities</h4>
              <ul>
                <li>System architecture design</li>
                <li>Real-time monitoring implementation</li>
                <li>Custom HMI development</li>
                <li>System optimization</li>
              </ul>

              <h4>Technologies Used</h4>
              <ul>
                <li>Modern SCADA Platforms</li>
                <li>Industrial Networks</li>
                <li>Database Integration</li>
                <li>Visualization Tools</li>
              </ul>

              <h4>Results</h4>
              <p>Improved operational efficiency by 35% and reduced monitoring costs by 25%.</p>
            `
  },
  project4: {
    title: "Global Tender Management",
    category: "Proposals",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    description: `
              <h4>Project Overview</h4>
              <p>Managed complex technical proposals and global tenders for industrial automation projects...</p>

              <h4>Key Responsibilities</h4>
              <ul>
                <li>Technical specification development</li>
                <li>Cost estimation and analysis</li>
                <li>Vendor coordination</li>
                <li>Compliance documentation</li>
              </ul>

              <h4>Technologies Used</h4>
              <ul>
                <li>Project Management Tools</li>
                <li>Cost Analysis Software</li>
                <li>Documentation Systems</li>
                <li>Collaboration Platforms</li>
              </ul>

              <h4>Results</h4>
              <p>Achieved 40% higher proposal success rate and reduced preparation time by 30%.</p>
            `
  },
  project5: {
    title: "OT Security Framework",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    description: `
              <h4>Project Overview</h4>
              <p>Implemented comprehensive OT security framework based on ISA/IEC 62443 standards...</p>

              <h4>Key Responsibilities</h4>
              <ul>
                <li>Security assessment and planning</li>
                <li>Risk mitigation strategies</li>
                <li>Compliance documentation</li>
                <li>Security monitoring setup</li>
              </ul>

              <h4>Technologies Used</h4>
              <ul>
                <li>Security Assessment Tools</li>
                <li>Monitoring Solutions</li>
                <li>Compliance Frameworks</li>
                <li>Documentation Systems</li>
              </ul>

              <h4>Results</h4>
              <p>Achieved full ISA/IEC 62443 compliance and reduced security incidents by 80%.</p>
            `
  },
  // Continuing project6 description from previous data
  project6: {
    title: "System Architecture Design",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
    description: `
              <h4>Project Overview</h4>
              <p>Developed comprehensive industrial system architectures for manufacturing facilities...</p>

              <h4>Key Responsibilities</h4>
              <ul>
                <li>Controller sizing and selection</li>
                <li>Network architecture design</li>
                <li>Hardware specification development</li>
                <li>Integration planning and execution</li>
              </ul>

              <h4>Technologies Used</h4>
              <ul>
                <li>CAD Design Tools</li>
                <li>Network Planning Software</li>
                <li>Industrial Controllers</li>
                <li>Integration Platforms</li>
              </ul>

              <h4>Results</h4>
              <p>Successfully implemented in 5 manufacturing facilities, resulting in 45% improved system reliability and 30% reduced maintenance costs.</p>
            `
  }
};

// Enhanced Modal Functionality
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("projectModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalCategory = document.getElementById("modalCategory");
  const modalDescription = document.getElementById("modalDescription");
  const closeButton = document.querySelector(".close-modal");

  // Function to close modal
  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
  }

  // Open Modal
  document.querySelectorAll(".modal-trigger").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation(); // Prevent event bubbling
      const projectId = e.currentTarget.dataset.project;
      const project = projectData[projectId];

      modalImage.src = project.image;
      modalTitle.textContent = project.title;
      modalCategory.textContent = project.category;
      modalDescription.innerHTML = project.description;

      modal.style.display = "block";
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    });
  });

  // Close Modal - Button Click
  closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeModal();
  });

  // Close Modal - Outside Click
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close Modal - Escape Key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
      closeModal();
    }
  });

  // Prevent modal content click from closing modal
  modal.querySelector(".modal-content").addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
