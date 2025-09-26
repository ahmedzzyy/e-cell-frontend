# TODO

## 1. Branching & Versioning

* [ ] **Create 2 separate branches for new features/changes.**\
  ✅ Solution: From `main`, create two long-lived branches:

  ```bash
  git checkout main
  git checkout -b current   # for ongoing maintenance of v1.x
  git checkout -b next      # for new version (v2.x)
  ```

    * `current`: bug fixes & small updates
    * `next`: new features, breaking changes

---

* [ ] **Implement tagging strategy: tag old code/features as `old` once done.**
  ✅ Solution: Use **Git tags** to mark versions and milestones.

    * For official releases:

      ```bash
      git checkout current
      git tag -a v1.0.0 -m "Stable release v1.0.0"
      git push origin v1.0.0
      ```
    * For deprecations, use `old/<feature>` format (e.g., `old/auth-system`).
    * Push tags explicitly:

      ```bash
      git push origin --tags
      ```

---

* [ ] **Figure out history for the 2 branches (how to merge or maintain separate histories).**
  ✅ Solution:

    * `current → main`: merge regularly (squash or fast-forward) to keep `main` production-ready.
    * `next → main`: don’t merge until stable release. Use `rebase` or `cherry-pick` to bring critical fixes from
      `current` into `next`:

      ```bash
      git checkout next
      git rebase current   # or git cherry-pick <commit>
      ```
    * Tag separately:

        * `v1.x.x` tags on `current` branch
        * `v2.x.x-alpha`, `v2.x.x-beta`, `v2.x.x` on `next` branch