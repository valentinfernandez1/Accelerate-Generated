provider "google" {
  version = "~> 3.42.0"
}
module "gke_auth" {
  source = "terraform-google-modules/kubernetes-engine/google//modules/auth"
  depends_on   = [module.gke] 
  project_id   = var.project_id
  location     = module.gke.location
  cluster_name = module.gke.name
}
resource "local_file" "kubeconfig" {
  content  = module.gke_auth.kubeconfig_raw
  filename = "kubeconfig-${var.env_name}"
}

module "gke" {
  source                 = "terraform-google-modules/kubernetes-engine/google//modules/private-cluster"
  project_id             = var.project_id
  name                   = "${var.cluster_name}-${var.env_name}"
  regional               = true
  node_pools = [ 
    {
      name                      = "defaultPool"
      machine_type              = "e2-medium"
      node_locations            = "europe-west1-d"
      min_count                 = 1
      max_count                 = 2
      disk_size_gb              = 10
    },
  ]
}
